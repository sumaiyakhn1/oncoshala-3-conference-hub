
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from "@/components/ui/card";
import ParticleBackground from '@/components/ParticleBackground';

// Full list of partners - in a real app this would likely come from an API
const allPartners = [
  {
    id: 1,
    name: "Astra Zeneca",
    logo: "/logo-img/astrazeneca.jpeg",
    type: "Pharmaceutical and Biotechnology company,",
    description: "What Science Can Do."
  },
  {
    id: 2,
    name: "Roche",
    logo: "/logo-img/roche.png",
    type: "Pharmaceuticals and Diagnostics",
    description: "Doing What Patient Needs Next."
  },
  {
    id: 3,
    name: "Johnson & Johnson",
    logo: "/logo-img/johnson and johnson.png",
    type: "Multi-National Pharmaceutical, Biotechnology, and Medical Technologies",
    description: "Changing Health For Humanity."
  },
  {
    id: 4,
    name: "MSD",
    logo: "/logo-img/msd.png",
    type: "Merck Sharp & Dohme Pharmaceuticals",
    description: "We follow the science where we can make the greatest difference, now and in the future"
  },
  {
    id: 5,
    name: "MERCK",
    logo: "/logo-img/merck.png",
    type: "Biopharmaceutical Company",
    description: "Sparking Discovery, Elevating Humanity"
  },
  {
    id: 6,
    name: "Takeda",
    logo: "/logo-img/takeda.png",
    type: "Japanese multinational pharmaceutical company",
    description: "Better Health, Brighter Future."
  },
  {
    id: 7,
    name: "Novartis",
    logo: "/logo-img/novartis.png",
    type: "Swiss multinational pharmaceutical corporation",
    description: "Reimagining medicine, together."
  },
  {
    id: 8,
    name: "Cellgen Biopharma",
    logo: "/logo-img/cellgen biopharma.jpeg", 
    type: "Pharmaceutical Company",
    description: "Quality, Care. Compassion."
  },
  {
    id: 9,
    name: "Eris Lifesciences",
    logo: "/logo-img/eris lifesciences.png",
    type: "Indian pharmaceutical company",
    description: "Power of Empathy and Truth of Science"
  },
  {
    id: 10,
    name: "Glenmark Pharmaceuticals",
    logo: "/logo-img/glenmark.png",
    type: "Indian pharmaceutical company",
    description: "A new way for a new world"
  },
  {
    id: 11,
    name: "Pfizer",
    logo: "/logo-img/pfizer.png",
    type: "Pharmaceutical Company",
    description: "Specialized in neurological aspects of cancer research."
  },
  {
    id: 12,
    name: "Servier",
    logo: "/logo-img/servier.png",
    type: "international pharmaceutical company",
    description: "Moved By You."
  },
  {
    id: 13,
    name: "Samarth Lifesciences",
    logo: "/logo-img/samarth.jpeg",
    type: "Pharmaceutical Company",
    description: "Adding Life To Life."
  },
  {
    id: 14,
    name: "Shilpa Lifesciences",
    logo: "/logo-img/shilpa.jpeg",
    type: "Pharmaaceutical Company",
    description: "Innovatig Affordable Healthcare"
  },
  {
    id: 15,
    name: "Hetro Healthcare",
    logo: "/logo-img/hetro.jpeg",
    type: "Indian pharmaceutical company",
    description: "Innovative Pharmaceutical Company"
  },
  {
    id: 16,
    name: "SN GENE Lab",
    logo: "/logo-img/genelab.jpeg",
    type: "Medical laboratory",
    description: "Democratizing genomics in India"
  },
  {
    id: 17,
    name: "Wembrace",
    logo: "/logo-img/wembrace.png",
    type: "Pharmaceutical company",
    description: "Embraces Quality and Innovation in Healthcare"
  },
  {
    id: 18,
    name: "Strand",
    logo: "/logo-img/strand.jpeg",
    type: "Indian pharmaceutical company",
    description: "Precision Medicine Solution"
  },
  {
    id: 19,
    name: "Intas",
    logo: "/logo-img/intas.jpeg",
    type: "Indian pharmaceutical company",
    description: "Expressions for a Healthy Life"
  },
  {
    id: 20,
    name: "Amneal Pharmaceuticals",
    logo: "/logo-img/amneal.png",
    type: "Generics and Specialty Pharmaceutical company",
    description: " We Make Healthy Possible"
  },
  {
    id: 21,
    name: "ZYDUS",
    logo: "/logo-img/zydus.png",
    type: "Indian pharmaceutical company",
    description: "Dedicated To Life"
  },
  {
    id: 22,
    name: "Fresnius Kabi",
    logo: "/logo-img/freshnius.png",
    type: "Pharmaceutical company",
    description: "Caring For Life"
  },
  {
    id: 22,
    name: "TORRET PHARMA",
    logo: "/logo-img/torret.png",
    type: "Pharmaceutical company",
    description: "We care about your overall health"
  },
  {
    id: 23,
    name: "Dr.Reddy's laboratories",
    logo: "/logo-img/drreddy.png",
    type: "Pharmaceutical company",
    description: "Good Health Cant Wait."
  },
  {
    id: 24,
    name: "Lilly",
    logo: "/logo-img/lilly.png",
    type: "Pharmaceutical company",
    description: "Creating Medicines to Make Lives Better."
  },
  {
    id: 25,
    name: "Shiplex Pharmaceuticals",
    logo: "/logo-img/shiplex.png",
    type: "Pharmaceutical company",
    description: "Commited To Life"
  },
  {
    id: 26,
    name: "ALKEM",
    logo: "/logo-img/alkem.png",
    type: "Pharmaceutical company",
    description: "Heading Towards a Promising Future in Healthcare."
  },
  {
    id: 27,
    name: "LUPIN",
    logo: "/logo-img/lupin.png",
    type: "Pharmaceutical company",
    description: "Healing and Health"
  },
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
