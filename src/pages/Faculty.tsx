
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
    name: "Dr. D. C. Doval",
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
    name: "Dr Vipul Sheth",
    designation: "Hematologic Oncologist",
    location: "Rajiv Gandhi Cancer Institute",
    image: "/doc-img/Vipul Sheth.jpg"
  },
  {
    id: 16,
    name: "Dr Amrita Ramaswami",
    designation: "Medical Oncologist & Hematologic Oncologist",
    location: "Medanta",
    image: "/doc-img/Amrita Ramaswami.jpg"
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
    name: "Dr. M. V. Chandrakanth",
    designation: "Medical Oncologist",
    location: "Narayana Superspecialty Hospital",
    image: "/doc-img/Chandrakanth.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Rakesh Chopra",
    designation: "Medical Oncologist",
    location: "Indraprastha Apollo Hospital",
    image: "/doc-img/Rakesh Chopra.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Abhishek Shankar",
    designation: "Radiation Oncology Professor",
    location: "All India Institute of Medical Sciences",
    image: "/doc-img/Abhishek Shankar.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Anshul Gupta",
    designation: "Medical Oncologist",
    location: "Max Super Speciality Hospital",
    image: "/doc-img/Anshul Gupta.jpg"
    
  },
  {
    id: 21,
    name: "Dr. S. P. Kataria",
    designation: "Medical Oncologist",
    location: "Medanta",
    image: "/doc-img/SP Kataria.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Mohit Saxena",
    designation: "Medical Oncologist",
    location: "Manipal Hospital",
    image: "/doc-img/Mohit Saxena.jpg"
    
  },
  {
    id: 21,
    name: "Dr. G. K. Jadhav",
    designation: "Radiation Oncologist",
    location: "Apollo Hospital",
    image: "/doc-img/GK Jadhav.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Arun Giri",
    designation: "Surgical Oncologist",
    location: "Aakash Healthcare",
    image: "/doc-img/Arun Giri.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Kapil Kumar",
    designation: "Surgical Oncologist",
    location: "Fortis Hospital",
    image: "/doc-img/Kapil Kumar.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Pankaj Goyal",
    designation: "Medical Oncologist",
    location: "Rajiv Gandhi Cancer Institute & Research Centre",
    image: "/doc-img/Pankaj Goyal.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Ajay Gupta",
    designation: "Medical Oncologist",
    location: "Apollo Hospital",
    image: "/doc-img/Ajay Gupta.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Devashish Tripathi",
    designation: "Radiation Oncologist",
    location: "Indraprastha Apollo Hospital",
    image: "/doc-img/Devashish Tripathi.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Kuldeep Sharma",
    designation: "Radiation Oncologist",
    location: "Venkateshwara Hospital",
    image: "/doc-img/Kuldeep Sharma.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Saurabh Mishra",
    designation: "Urologist",
    location: "All India Institute of Medical Sciences (AIIMS)",
    image: "/doc-img/Saurabh Mishra.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Sunil Pasricha",
    designation: "Oncopathologist",
    location: " Rajiv Gandhi Cancer Institute & Reserach Centre",
    image: "/doc-img/Sunil Pasricha.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Priya Tiwari",
    designation: "Medical Oncologist",
    location: "Artemis Hospital",
    image: "/doc-img/Priya  Tiwari.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Shuaib Zaidi",
    designation: "Surgical Oncologist",
    location: "Apollo Hospital",
    image: "/doc-img/Shuaib Zaidi.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Kaushal Kalra",
    designation: "Medical Oncologist",
    location: "Vardhman Mahavir Medical College and Safdarjung Hospital",
    image: "/doc-img/Kaushal Kalra.jpg"
    
  },
  {
    id: 21,
    name: "Dr. J. K. Saini",
    designation: "--",
    location: "--",
    image: "/doc-img/"
    
  },
  {
    id: 21,
    name: "Dr. Sapna Manocha",
    designation: "Radiation Oncologist",
    location: "Indraprastha Apollo Hospital",
    image: "/doc-img/Sapna Manocha.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Sunil Kumar Gupta ",
    designation: "Medical Oncologist",
    location: "Venkateshwar Cancer Centre",
    image: "/doc-img/Sunil Kumar.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Durgatosh Pandey",
    designation: "Surgical Oncologist",
    location: "Manipal Hospital",
    image: "/doc-img/Durgatosh Pandey.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Dodul Mondal",
    designation: "Clinical and Radiation Oncologist",
    location: "Max Super Speciality Hospital",
    image: "/doc-img/Dodul Mondal.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Bhushan Thombare",
    designation: "Thoracic Surgeon",
    location: "Indraprastha Apollo Hospital",
    image: "/doc-img/Bhushan Thombare.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Abhishek Bansal",
    designation: "Radiation Oncologist",
    location: "Aakash Healthcare",
    image: "/doc-img/Abhishek Bansal.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Manish Sahni",
    designation: "--",
    location: "--",
    image: "/doc-img/"
    
  },
  {
    id: 21,
    name: "Dr. Shina Goyal",
    designation: "Medical Oncologist",
    location: "Medanta",
    image: "/doc-img/Shina Goyal.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Shefali Sardana",
    designation: "Medical Oncology",
    location: "Max Healthcare",
    image: "/doc-img/Shefali Sardana.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Tarun Durga",
    designation: "Medical Oncologist & Radiation Oncologist",
    location: "--",
    image: "/doc-img/"
    
  },
  {
    id: 21,
    name: "Dr. Shiv Shankara",
    designation: "Radiation Oncologist",
    location: "Max Super speciality Hospital",
    image: "/doc-img/Shiv Shankara.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Parveen Garg",
    designation: "Urologist",
    location: "--",
    image: "/doc-img/"
    
  },
  {
    id: 21,
    name: "Dr. Subhash Gupta",
    designation: "Liver and Hepatobilliary Surgeon",
    location: "Max Healthcare",
    image: "/doc-img/"
    
  },
  {
    id: 21,
    name: "Dr. Ankit Batra",
    designation: "Orthopaedic Surgeon",
    location: "SMSR & Sharda Hospital",
    image: "/doc-img/Ankit Batra.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Aditya Sarin",
    designation: "Medical Oncologist",
    location: "Sir Ganga Ram Hospital",
    image: "/doc-img/Aditya Sarin.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Ishu Gupta",
    designation: "medical Oncologist & Hematologic Oncologist",
    location: "HCG Ramaiah Hospital",
    image: "/doc-img/Ishu Gupta.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Raghu Ram",
    designation: "Breast Cancer Surgeon",
    location: "Kims Hospital",
    image: "/doc-img/Raghu Ram.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Nikhil Himthani",
    designation: "Medical Oncologist",
    location: "Batra Hospital & Medical Research Centre",
    image: "/doc-img/Nikhil Himthani.jpg"
    
  },
  {
    id: 21,
    name: "Dr. Deepika Chauhan",
    designation: "Radiation Oncologist",
    location: "Venkateshwar hospital",
    image: "/doc-img/Deepika Chauhan.jpg"
    
  },
  {
    id: 21,
    name: "Dr. J. K. Saini",
    designation: "--",
    location: "--",
    image: "/doc-img/"
    
  },
  {
    id: 21,
    name: "Dr. J. K. Saini",
    designation: "--",
    location: "--",
    image: "/doc-img/"
    
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
