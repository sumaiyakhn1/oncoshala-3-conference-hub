
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from "@/components/ui/card";
import ParticleBackground from '@/components/ParticleBackground';

// Full list of partners - in a real app this would likely come from an API
const allPartners = [
  {
    id: 1,
    name: "University of Delhi",
    logo: "/placeholder.svg",
    type: "Medical University",
    description: "Leading public university contributing to oncology education and research."
  },
  {
    id: 2,
    name: "AIIMS New Delhi",
    logo: "/placeholder.svg",
    type: "Institute of Medical Sciences",
    description: "Premier medical institution advancing cancer treatment methodologies."
  },
  {
    id: 3,
    name: "Tata Memorial Hospital",
    logo: "/placeholder.svg",
    type: "Cancer Research Centre",
    description: "Specialized in cancer research and advanced treatment protocols."
  },
  {
    id: 4,
    name: "CMC Vellore",
    logo: "/placeholder.svg",
    type: "Medical College & Hospital",
    description: "Renowned for medical education and comprehensive healthcare services."
  },
  {
    id: 5,
    name: "King George's Medical University",
    logo: "/placeholder.svg",
    type: "Medical University",
    description: "Historic institution with significant contributions to oncology practice."
  },
  {
    id: 6,
    name: "Postgraduate Institute of Medical Education and Research",
    logo: "/placeholder.svg",
    type: "Research Institute",
    description: "Leading center for postgraduate medical education and research."
  },
  {
    id: 7,
    name: "Rajiv Gandhi Cancer Institute",
    logo: "/placeholder.svg",
    type: "Cancer Treatment Centre",
    description: "Specialized in comprehensive cancer care and innovative treatments."
  },
  {
    id: 8,
    name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences",
    logo: "/placeholder.svg",
    type: "Medical Institute",
    description: "Advanced medical education and research with oncology specialization."
  },
  {
    id: 9,
    name: "Maulana Azad Medical College",
    logo: "/placeholder.svg",
    type: "Medical College",
    description: "Prominent institution for medical education and oncology research."
  },
  {
    id: 10,
    name: "Jawaharlal Institute of Postgraduate Medical Education & Research",
    logo: "/placeholder.svg",
    type: "Medical Education Institute",
    description: "Advancing medical knowledge through education and research."
  },
  {
    id: 11,
    name: "National Institute of Mental Health and Neurosciences",
    logo: "/placeholder.svg",
    type: "Research Institute",
    description: "Specialized in neurological aspects of cancer research."
  },
  {
    id: 12,
    name: "Regional Cancer Centre",
    logo: "/placeholder.svg",
    type: "Cancer Treatment Centre",
    description: "Dedicated to cancer treatment, research, and prevention."
  },
  {
    id: 13,
    name: "Gujarat Cancer & Research Institute",
    logo: "/placeholder.svg",
    type: "Research Institute",
    description: "Leading cancer research and treatment facility in western India."
  },
  {
    id: 14,
    name: "Cancer Institute (WIA)",
    logo: "/placeholder.svg",
    type: "Cancer Centre",
    description: "Pioneering cancer treatment and research in southern India."
  },
  {
    id: 15,
    name: "Chittaranjan National Cancer Institute",
    logo: "/placeholder.svg",
    type: "Cancer Institute",
    description: "National institution dedicated to cancer research and treatment."
  }
];

const Partners = () => {
  useEffect(() => {
    document.title = 'Academic Partners - Oncoshala-3 Conference';
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="heading-2 mb-6">
                <span className="teal-gradient-text">Academic Partners</span>
              </h1>
              <p className="subheading">
                Oncoshala-3 is proud to collaborate with these distinguished academic institutions 
                dedicated to advancing oncology research, education, and patient care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {allPartners.map((partner) => (
                <Card key={partner.id} className="glass-card overflow-hidden hover:shadow-glass-hover transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mr-4">
                        <img src={partner.logo} alt={partner.name} className="w-10 h-10" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{partner.name}</h3>
                        <p className="text-teal-700 text-sm">{partner.type}</p>
                      </div>
                    </div>
                    <p className="text-foreground/80 text-sm">{partner.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Partners;
