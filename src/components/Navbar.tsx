
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  // Mobile menu links component
  const NavLinks: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => (
    <>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(section.id);
          }}
          className={cn(
            isMobile 
              ? "block py-3 px-4 text-lg font-medium border-b border-white/10 text-foreground/90 hover:text-foreground transition-colors" 
              : "nav-link",
            (isMobile ? activeSection === section.id && "text-teal-400" : activeSection === section.id && "active")
          )}
        >
          {section.label}
        </a>
      ))}
    </>
  );
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 glass-nav transition-all duration-300 z-50",
      scrolled ? "py-3" : "py-5"
    )}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a 
          href="#home" 
          className="font-display text-xl md:text-2xl font-bold teal-gradient-text"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Oncoshala<span className="font-medium">-3</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLinks />
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-full hover:bg-black/5 focus:outline-none">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-nav backdrop-blur-lg border-l border-white/10 w-[75vw] max-w-[300px] p-0">
              <div className="flex flex-col py-8 px-4">
                <div className="flex items-center justify-between mb-8">
                  <a 
                    href="#home" 
                    className="font-display text-xl font-bold teal-gradient-text"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('home');
                    }}
                  >
                    Oncoshala<span className="font-medium">-3</span>
                  </a>
                </div>
                <div className="flex flex-col">
                  <NavLinks isMobile={true} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
