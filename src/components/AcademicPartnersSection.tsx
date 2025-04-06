
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample partner data - in a real app this would likely come from an API
const featuredPartners = [
  {
    id: 1,
    name: "University of Delhi",
    logo: "/placeholder.svg",
    type: "Medical University"
  },
  {
    id: 2,
    name: "AIIMS New Delhi",
    logo: "/placeholder.svg",
    type: "Institute of Medical Sciences"
  },
  {
    id: 3,
    name: "Tata Memorial Hospital",
    logo: "/placeholder.svg",
    type: "Cancer Research Centre"
  },
  {
    id: 4,
    name: "CMC Vellore",
    logo: "/placeholder.svg",
    type: "Medical College & Hospital"
  }
];

const AcademicPartnersSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="heading-2 mb-6 animate-fade-in">
            <span className="teal-gradient-text">Academic Partners</span>
          </h2>
          <p className="subheading max-w-2xl mx-auto">
            Collaborating with leading institutions to advance oncology research and education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {featuredPartners.map((partner) => (
            <Card key={partner.id} className="glass-card hover:shadow-glass-hover transform transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 rounded-full bg-teal-50 flex items-center justify-center">
                  <img src={partner.logo} alt={partner.name} className="w-12 h-12" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{partner.name}</h3>
                <p className="text-foreground/70 text-sm">{partner.type}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center animate-fade-in">
          <Link to="/partners">
            <Button variant="outline" className="group">
              See All Partners
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Design elements */}
      <div className="absolute -top-16 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-tr from-teal-100 to-transparent rounded-full blur-3xl opacity-40 animate-pulse-soft"></div>
    </section>
  );
};

export default AcademicPartnersSection;
