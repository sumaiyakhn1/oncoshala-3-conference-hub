
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const DirectorSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="heading-2 mb-6 animate-fade-in">
            <span className="teal-gradient-text">Program Director</span>
          </h2>
          
          <Card className="max-w-md w-full glass-card p-6 md:p-8 animate-slide-up">
            <CardContent className="p-0 flex flex-col items-center">
              <Avatar className="h-32 w-32 border-4 border-teal-100 mb-4 shadow-lg">
                <AvatarImage src="/doc-img/Sushant Mittal.jpg" alt="Dr. Shushant Mittal" />
                <AvatarFallback className="text-2xl bg-teal-100 text-teal-700">SM</AvatarFallback>
              </Avatar>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-1">Dr. Shushant Mittal</h3>
              <p className="text-teal-700 font-medium mb-3">Director of Program, Oncoshala</p>
              <p className="text-foreground/70 text-sm md:text-base">
                Leading the conference with expertise and dedication to advancing oncology research and practice.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Design elements */}
      <div className="absolute -bottom-16 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-tr from-teal-100 to-transparent rounded-full blur-3xl opacity-60 animate-pulse-soft"></div>
    </section>
  );
};

export default DirectorSection;
