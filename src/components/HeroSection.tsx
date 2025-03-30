
import React from 'react';
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-0 flex flex-col items-center text-center">
        <span className="inline-block py-1 px-3 mb-6 rounded-full bg-teal-100 text-teal-800 font-medium text-sm animate-fade-in">
          April 5-6, 2024
        </span>
        
        <h1 className="heading-1 mb-6 max-w-5xl animate-slide-down">
          <span className="teal-gradient-text">Oncoshala</span>
          <span className="text-beige-800">-3</span>
        </h1>
        
        <p className="subheading max-w-2xl mx-auto mb-8 animate-slide-up">
        Innovating Oncology: Bridging Research, Practice, and Patient Care.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 animate-fade-in">
          <div className="glass-card p-6 md:p-8 flex flex-col items-center">
            <span className="text-lg md:text-xl font-medium text-teal-700 mb-1">Location</span>
            <span className="text-base md:text-lg text-foreground">Pride Plaza Hotel, Aerocity,	New	Delhi</span>
          </div>
          
          <div className="glass-card p-6 md:p-8 flex flex-col items-center">
            <span className="text-lg md:text-xl font-medium text-teal-700 mb-1">Date</span>
            <span className="text-base md:text-lg text-foreground">April 5-6, 2024</span>
          </div>
          
          <div className="glass-card p-6 md:p-8 flex flex-col items-center">
            <span className="text-lg md:text-xl font-medium text-teal-700 mb-1">Time</span>
            <span className="text-base md:text-lg text-foreground">10:00 AM onwards</span>
          </div>
        </div>
        
        <div className="mt-12 animate-slide-up delay-300">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Register Now
          </button>
        </div>
      </div>
      
      {/* Design elements */}
      <div className="absolute -bottom-16 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-tr from-teal-100 to-transparent rounded-full blur-3xl opacity-60 animate-pulse-soft"></div>
      <div className="absolute top-20 right-1/4 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-bl from-beige-200 to-transparent rounded-full blur-3xl opacity-50 animate-pulse-soft"></div>
    </section>
  );
};

export default HeroSection;
