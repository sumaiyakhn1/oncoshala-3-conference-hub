
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Menu } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const sections = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/' },
    { id: 'venue', label: 'Venue', path: '/' },
    { id: 'schedule', label: 'Schedule', path: '/schedule' },
    { id: 'contact', label: 'Contact', path: '/' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 10);
      
      // Only update section tracking on homepage
      if (location.pathname === '/') {
        // Update active section based on scroll position
        const sectionElements = sections
          .filter(section => section.path === '/')
          .map(section => ({
            id: section.id,
            element: document.getElementById(section.id),
          }))
          .filter(item => item.element !== null);
        
        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const section = sectionElements[i];
          if (section.element) {
            const rect = section.element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      } else {
        // For other pages, set active based on the current path
        const currentPath = location.pathname.substring(1) || 'home';
        setActiveSection(currentPath);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set active section on page load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);
  
  const scrollToSection = (sectionId: string, path: string) => {
    if (location.pathname !== path) {
      return; // Let the Link component handle navigation
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  // Mobile menu links component
  const NavLinks: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => (
    <>
      {sections.map((section) => (
        <Link
          key={section.id}
          to={section.path}
          onClick={(e) => {
            if (section.path === location.pathname) {
              e.preventDefault();
              scrollToSection(section.id, section.path);
            }
          }}
          className={cn(
            isMobile 
              ? "flex items-center justify-center w-full py-4 text-lg font-medium border-b border-white/10 text-foreground/90 hover:text-teal-400 transition-colors" 
              : "nav-link",
            (isMobile ? 
              (section.path === '/schedule' && location.pathname === '/schedule') || 
              (section.id === activeSection && section.path === location.pathname)
              ? "text-teal-400 font-semibold" 
              : ""
            : 
              (section.path === '/schedule' && location.pathname === '/schedule') || 
              (section.id === activeSection && section.path === location.pathname)
              ? "active" 
              : "")
          )}
        >
          {section.label}
        </Link>
      ))}
    </>
  );
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 glass-nav transition-all duration-300 z-50",
      scrolled ? "py-3" : "py-5"
    )}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link 
          to="/"
          className="font-display text-xl md:text-2xl font-bold teal-gradient-text"
        >
          Oncoshala<span className="font-medium">-3</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLinks />
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <button className="p-2 rounded-full hover:bg-black/5 focus:outline-none">
                <Menu className="w-6 h-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-lg border-t border-white/10 p-0 rounded-t-3xl">
              <div className="mx-auto w-12 h-1.5 bg-muted rounded-full my-3 mb-6" />
              <div className="max-h-[80vh] overflow-auto px-4 pb-8">
                <div className="flex items-center justify-center mb-6">
                  <Link 
                    to="/"
                    className="font-display text-2xl font-bold teal-gradient-text"
                  >
                    Oncoshala<span className="font-medium">-3</span>
                  </Link>
                </div>
                <div className="flex flex-col items-center">
                  <NavLinks isMobile={true} />
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
