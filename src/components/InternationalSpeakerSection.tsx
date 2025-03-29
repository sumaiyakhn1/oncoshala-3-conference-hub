
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Globe } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const InternationalSpeakerSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="international-speaker" className="py-16 md:py-24 bg-gradient-to-br from-white via-slate-50 to-red-50/30">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Speaker Image */}
          <div className="w-full md:w-2/5 relative">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-red-500 to-red-400 rounded-2xl blur-sm opacity-75 animate-pulse"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/Marc Thill.jpg" 
                  alt="Dr. Marc Thill" 
                  className="w-full h-full object-cover"
                />
              </div>
              <Badge className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-500 text-white py-1.5 px-3 flex items-center gap-1.5 shadow-md">
                <Globe size={14} />
                <span className="font-medium">International Speaker</span>
              </Badge>
            </div>
          </div>
          
          {/* Speaker Details */}
          <div className="w-full md:w-3/5 space-y-6 text-center md:text-left">
            <div>
              <h2 className="heading-2 mb-2 font-display">
                <span className="teal-gradient-text">International</span> Speaker
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto md:mx-0 mb-6"></div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold font-display">Dr. Marc Thill</h3>
              <p className="text-lg text-foreground/80 font-medium">
                Directer of Department of Gynecology and Gynecologic Oncology.
              </p>
              <p className="text-md text-foreground/70 italic">
              Agaplesion Markus Hospital in Frankfurt, Hessen, Germany.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm shadow-sm border border-gray-100 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
              Dr. Marc Thill, chief physician at Agaplesion Markus Hospital, is a leading expert in gynecologic oncology and breast cancer. His research focuses on advanced screening techniques like ctDNA and CTC analysis. At Oncoshala-3, he will share insights on advancements in cancer diagnostics and treatment.</p>
            </div>
            
            <div className="pt-4">
              <Button className="bg-gradient-to-r from-teal-500 to-teal-300 hover:from-red-700 hover:to-red-600 text-white shadow-md font-medium px-6">
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalSpeakerSection;
