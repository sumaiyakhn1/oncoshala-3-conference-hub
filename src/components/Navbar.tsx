
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Menu, UserPlus } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from 'react-router-dom';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'venue', label: 'Venue' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'contact', label: 'Contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 10);
      
      // Only track sections on homepage
      if (location.pathname === '/') {
        // Update active section based on scroll position
        const sectionElements = sections.map(section => ({
          id: section.id,
          element: document.getElementById(section.id),
        })).filter(item => item.element !== null);
        
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
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);
  
  const scrollToSection = (sectionId: string) => {
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
      {location.pathname === '/' ? (
        sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section.id);
            }}
            className={cn(
              isMobile 
                ? "flex items-center justify-center w-full py-4 text-lg font-medium border-b border-white/10 text-foreground/90 hover:text-teal-400 transition-colors" 
                : "nav-link",
              (isMobile ? activeSection === section.id && "text-teal-400 font-semibold" : activeSection === section.id && "active")
            )}
          >
            {section.label}
          </a>
        ))
      ) : (
        // In other pages, link back to home sections
        sections.map((section) => (
          <a
            key={section.id}
            href={`/#${section.id}`}
            className={cn(
              isMobile 
                ? "flex items-center justify-center w-full py-4 text-lg font-medium border-b border-white/10 text-foreground/90 hover:text-teal-400 transition-colors" 
                : "nav-link"
            )}
          >
            {section.label}
          </a>
        ))
      )}
      <a
        href="/registration"
        className={cn(
          isMobile 
            ? "flex items-center justify-center gap-2 w-full py-4 text-lg font-medium text-teal-500 font-semibold transition-colors" 
            : "hidden md:flex items-center gap-2 ml-3"
        )}
      >
        {!isMobile ? (
          <Button size="sm" variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
            <UserPlus className="w-4 h-4 mr-1" />
            Register
          </Button>
        ) : (
          <>
            <UserPlus className="w-5 h-5" />
            Register
          </>
        )}
      </a>
    </>
  );
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 glass-nav transition-all duration-300 z-50",
      scrolled ? "py-3" : "py-5"
    )}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a 
          href="/" 
          className="font-display text-xl md:text-2xl font-bold teal-gradient-text"
        >
          Oncoshala<span className="font-medium">-3</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLinks />
        </div>
        
        {/* Mobile Registration Button */}
        <div className="md:hidden flex items-center">
          <a href="/registration" className="mr-3">
            <Button size="sm" variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
              <UserPlus className="w-4 h-4" />
            </Button>
          </a>
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
                  <a 
                    href="/" 
                    className="font-display text-2xl font-bold teal-gradient-text"
                  >
                    Oncoshala<span className="font-medium">-3</span>
                  </a>
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
