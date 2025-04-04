
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

// Faculty data - in a real app this would likely come from an API
const facultyData = [
  {
    id: 1,
    name: "Dr. Marc Thill",
    designation: "Chief Physician",
    location: "Agaplesion Markus Hospital",
    image: "/Marc Thill.jpg",
    isInternational: true,
    country: "United States"
  },
  {
    id: 2,
    name: "Dr. Sushant Mittal",
    designation: "Medical Oncologist",
    location: "Action Cancer Hospital",
    image: "/doc-img/Sushant Mittal.jpg"
  },
  {
    id: 3,
    name: "Dr. Aparna Dhar",
    designation: "Medical Geneticist & Genetic Counsellor",
    location: "Max Healthcare",
    image: "/doc-img/Aparna Dhar.jpg"
  },
  {
    id: 4,
    name: "Dr. Samit Purohit",
    designation: "Medical Oncologist & Hematologic Oncologist",
    location: "Action Cancer Hospital",
    image: "/doc-img/Samit Purohit.jpg"
  },
  {
    id: 5,
    name: "Dr. Ankur Varshney",
    designation: "Medical Oncologist",
    location: "Medanta The Medicity",
    image: "/doc-img/Ankur Varshney.jpg"
  },
  {
    id: 6,
    name: "Dr. Ramesh Sarin",
    designation: "Surgical Oncologist",
    location: "Apollo Hospitals",
    image: "/doc-img/Ramesh Sarin.jpg"
  },
  {
    id: 7,
    name: "Dr. DC Doval",
    designation: "Medical Oncologist",
    location: "Rajiv Gandhi Cancer Institute and Research Centre",
    image: "/doc-img/DC Doval.jpg"
  },
  {
    id: 8,
    name: "Dr. Mukesh Patekar",
    designation: "Medical Oncologist & Hematologic Oncologist",
    location: "Artemis Hospital",
    image: "/doc-img/Mukesh Patekar.jpg"
  },
  {
    id: 9,
    name: "Dr. Mohit Agarwal",
    designation: "Medical Oncologist",
    location: "Fortis Hospitals",
    image: "/doc-img/Mohit Agarwal.jpg"
  },
  {
    id: 10,
    name: "Dr. Vineet Talwar",
    designation: "Medical Oncologist",
    location: "Rajiv Gandhi Cancer Institute",
    image: "/doc-img/Vineet Talwar.jpg"
  },
  {
    id: 11,
    name: "Dr. Vikas Talreja",
    designation: "Medical Oncologist & Hematologic Oncologist",
    location: "Regency Hospital",
    image: "/doc-img/Vikas Talreja.jpg"
  },
  {
    id: 12,
    name: "Dr. Jyoti Anand",
    designation: "Medical Oncologist",
    location: "Fortis Hospital",
    image: "/doc-img/Jyoti Anand.jpg"
  },
  {
    id: 13,
    name: "Dr Nagender Sharma",
    designation: "Medical Oncologist",
    location: "Max Healthcare",
    image: "/doc-img/Nagender Sharma.jpg"
  },
  {
    id: 14,
    name: "Dr Parveen Jain",
    designation: "Medical Oncology",
    location: "Aakash Healthcare",
    image: "/doc-img/parveen-jain.jpg"
  },
  {
    id: 15,
    name: "Dr. Tanya Khanna",
    designation: "Neuro-oncologist",
    location: "Narayana Health",
    image: "/placeholder.svg"
  },
  {
    id: 16,
    name: "Dr. Suresh Menon",
    designation: "Radiation Physicist",
    location: "Kerala Institute of Medical Sciences",
    image: "/placeholder.svg"
  },
  {
    id: 17,
    name: "Dr. Arul Goel",
    designation: "Surgical Oncologist",
    location: "Max Super Specialty Hospital",
    image: "/placeholder.svg"
  },
  {
    id: 18,
    name: "Dr. Manoj Sharma",
    designation: "Orthopedic Surgeon",
    location: "Orthopedic & Spine Clinic",
    image: "/doc-img/Manoj Sharma.jpg"
  },
  {
    id: 19,
    name: "Dr. S. K. Poddar",
    designation: "Neurologist",
    location: "Galaxy Hospital",
    image: "/doc-img/SK Poddar.jpg"
  },
  {
    id: 20,
    name: "Dr. Bhawna",
    designation: "--",
    location: "--",
    image: "/placeholder.svg"
  },
  {
    id: 21,
    name: "Dr. Ravinder Malwal",
    designation: "--",
    location: "--",
    image: "/placeholder.svg"
    
  },
  {
    id: 22,
    name: "Dr. Deepak Singla",
    designation: "Medical Oncologist",
    location: "Indus International Hospital",
    image: "/doc-img/Deepak Singla.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Aditya Murali",
    designation: "Medical & Hematologic Oncologist",
    location: "Apollo Hospital",
    image: "/doc-img/Aditya Murali.jpg"
    
  },
  {
    id: 21,
    name: "Dr. M V Chandrakanth",
    designation: "Medical Oncologist",
    location: "Narayana Superspecialty Hospital",
    image: "/doc-img/Chandrakanth.jpg"
    
  },
  {
    id: 21,
    name: "Dr. ",
    designation: "--",
    location: "--",
    image: "/placeholder.svg"
    
  },
  {
    id: 21,
    name: "Dr. ",
    designation: "--",
    location: "--",
    image: "/placeholder.svg"
    
  },
  {
    id: 21,
    name: "Dr. ",
    designation: "--",
    location: "--",
    image: "/placeholder.svg"
    
  },
  {
    id: 21,
    name: "Dr. ",
    designation: "--",
    location: "--",
    image: "/placeholder.svg"
    
  },
  {
    id: 21,
    name: "Dr. ",
    designation: "--",
    location: "--",
    image: "/placeholder.svg"
    
  },
  {
    id: 21,
    name: "Dr. ",
    designation: "--",
    location: "--",
    image: "/placeholder.svg"
    
  },
  {
    id: 21,
    name: "Dr. ",
    designation: "--",
    location: "--",
    image: "/placeholder.svg"
    
  },
  {
    id: 21,
    name: "Dr. ",
    designation: "--",
    location: "--",
    image: "/placeholder.svg"
    
  },
  {
    id: 21,
    name: "Dr. ",
    designation: "--",
    location: "--",
    image: "/placeholder.svg"
    
  }
];

const Faculty = () => {
  // Set document title
  useEffect(() => {
    document.title = 'Oncoshala-3 Conference | Faculty';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container-section pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-2 mb-4">
              <span className="teal-gradient-text">Meet Our Distinguished Faculty</span>
            </h1>
            <p className="subheading max-w-3xl mx-auto">
              Learn from world-renowned experts in oncology from across India and around the globe
              who are at the forefront of cancer research, treatment, and patient care.
            </p>
          </motion.div>
        </section>
        
        {/* Faculty Grid */}
        <section className="container-section pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {facultyData.map((faculty, index) => (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-card hover:shadow-lg transition-all duration-300 ${
                  faculty.isInternational 
                    ? 'border-2 border-teal-400 bg-gradient-to-br from-white/80 to-teal-50/50' 
                    : ''
                }`}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <Avatar className={`w-24 h-24 mb-4 ${faculty.isInternational ? 'ring-4 ring-teal-400/30' : ''}`}>
                    <AvatarImage src={faculty.image} alt={faculty.name} />
                    <AvatarFallback className="bg-teal-100 text-teal-800 text-xl font-semibold">
                      {faculty.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="font-semibold text-lg mb-1">{faculty.name}</h3>
                  <p className="text-sm text-foreground/70 mb-3">{faculty.designation}</p>
                  
                  <div className="flex items-center text-xs text-foreground/60 mb-3">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{faculty.location}</span>
                  </div>
                  
                  {faculty.isInternational && (
                    <Badge className="bg-teal-500 hover:bg-teal-600 font-normal">
                      <Globe className="w-3 h-3 mr-1" />
                      International Faculty
                    </Badge>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-card p-8">
              <h2 className="heading-3 mb-4">
                <span className="teal-gradient-text">Join Us at Oncoshala-3</span>
              </h2>
              <p className="text-foreground/80 mb-6">
                Don't miss this opportunity to learn from these experts and network with professionals
                from around the world at Oncoshala-3 Conference.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
              
                <a href="/schedule" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  View Schedule
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faculty;
