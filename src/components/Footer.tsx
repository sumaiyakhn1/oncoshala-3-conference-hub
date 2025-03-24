
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-50/80 border-t border-teal-100">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4 teal-gradient-text">Oncoshala-3</h3>
            <p className="text-foreground/70">
              International Conference on Innovations in Oncology Research and Treatment
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-foreground/70 hover:text-teal-600 transition-colors">Home</a>
              <a href="#about" className="text-foreground/70 hover:text-teal-600 transition-colors">About</a>
              <a href="#venue" className="text-foreground/70 hover:text-teal-600 transition-colors">Venue</a>
              <a href="#schedule" className="text-foreground/70 hover:text-teal-600 transition-colors">Schedule</a>
              <a href="#contact" className="text-foreground/70 hover:text-teal-600 transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 hover:bg-teal-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 hover:bg-teal-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 hover:bg-teal-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 hover:bg-teal-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-teal-100 text-center text-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} Oncoshala-3. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
