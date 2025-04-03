
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-50/80 border-t border-teal-100">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4 teal-gradient-text">Oncoshala-3</h3>
            <p className="text-foreground/70">
            Conference on Innovations in Oncology: Bridging Research, Practice, and Patient Care.
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
  <h3 className="font-medium text-lg mb-4 text-foreground">Our Partners</h3>
  <ul className="space-y-4 w-full">
    <li className="flex items-center justify-start space-x-6">
      <img src="/logo.webp" alt="AMD Global Net" className="h-16 w-auto object-contain" />
      <a href="https://www.amdglobalnet.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-teal-600 hover:underline">
        AMD Global Net
      </a>
    </li>
    <li className="flex items-center justify-start space-x-6">
      <img src="logo2.png" alt="Sparssh" className="h-24 w-auto object-contain  -ml-4 " />
      <a href="https://www.sparssh.org/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-teal-600 hover:underline">
        Sparssh
      </a>
    </li>
  </ul>
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
