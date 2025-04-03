
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import ParticleBackground from '@/components/ParticleBackground';

// Day 1 Schedule data
const day1Schedule = [
  { "time": "10:00 - 10:30 AM", "event": "Registration", "speaker": "N/A" },
  { "time": "10:30 - 10:35 AM", "event": "Welcome & Context Setting", "speaker": "Dr. Sushant Mittal" },

  { "time": "10:35 - 11:05 AM", "event": "Panel Discussion on BRACA", "speaker": "Dr. Aparna Dhar (Moderator), Dr. TBA (Panelist)" },
  { "time": "11:05 - 11:30 AM", "event": "Role of Liquid Biopsy in Future Cancer Diagnosis & Management", "speaker": "Dr. TBA" },

  { "time": "11:30 - 12:00 PM", "event": "NGS in H&N Cancer", "speaker": "Dr. Aparna Dhar" },
  { "time": "12:30 - 1:00 PM", "event": "Nasopharyngeal Carcinoma", "speaker": "Dr. Samit Purohit" },
  { "time": "1:00 - 1:50 PM", "event": "Lunch", "speaker": "N/A" },
  { "time": "1:50 - 2:10 PM", "event": "KN048 - Role of Immunotherapy in 1st Line uR or M HNSCC", "speaker": "Dr. Ankur Varshney" },

  { "time": "2:10 - 2:40 PM", "event": "Case-based Panel Discussion: HR+/HER2 Low MBC", "speaker": "Dr. Ramesh Sarin / Dr. DC Doval" },
  { "time": "2:40 - 3:00 PM", "event": "Impact of Subcutaneous Dual HER2 Blockade on Patients of HER2+ve Breast Cancer", "speaker": "Dr. TBA" },
  { "time": "3:00 - 3:10 PM", "event": "Session TBA", "speaker": "Dr. TBA" },
  { "time": "3:10 - 3:30 PM", "event": "Session TBA (N)", "speaker": "Dr. TBD" },
  { "time": "3:30 - 3:50 PM", "event": "Role of Immunotherapy and Its Sequencing Strategy in Advanced TNBC", "speaker": "Dr. Mukesh Patekar" },

  { "time": "3:50 - 4:10 PM", "event": "Role of Tecentriq in Management of ES-SCLC", "speaker": "Dr. TBA" },
  { "time": "4:10 - 4:30 PM", "event": "Optimising Treatment Strategies in Management of mNSCLC", "speaker": "Dr. TBA" },
  { "time": "4:30 - 4:50 PM", "event": "Role of Tecentriq in NSCLC", "speaker": "Dr. TBA" },
  { "time": "4:50 - 5:10 PM", "event": "Non-Squamous mNSCLC - The Way Forward: The Breakthrough of Immunotherapy", "speaker": "Dr. Mohit Agarwal" },
  { "time": "5:10 - 5:15 PM", "event": "Running Tea-Break", "speaker": "N/A" },
  { "time": "5:10 - 5:30 PM", "event": "Optimising Treatments in Advanced EGFRM Lung Cancer", "speaker": "Dr. TBA" },
  { "time": "5:30 - 6:00 PM", "event": "Panel Discussion - Integrating I/O in Management of Early Lung in Both Operative and Inoperative Settings", "speaker": "Dr. TBA (Moderator), Dr. TBA/TBA/TBA (Panelists)" },

  { "time": "6:00 - 6:30 PM", "event": "Gastro-Symposia", "speaker": "Dr. Vineet Talwar" },
  { "time": "6:30 - 7:00 PM", "event": "Panel Discussion - Management of Advanced HCC", "speaker": "Dr. Vikas Talreja (Moderator), Dr. TBA/Dr. TBA/Dr. TBA (Panelists)" },
  { "time": "7:00 - 7:30 PM", "event": "Bridging the Gap in Metastatic Pancreatic Cancer with Nal-IRI", "speaker": "Dr. Sushant Mittal" },

  { "time": "7:30 - 7:50 PM", "event": "Moderator Session: Illuminating Optimum Management of Advanced Bladder Cancer", "speaker": "Dr. TBA (Moderator), Dr. TBA/Dr. TBA/Dr. TBA (Panelists)" },
  { "time": "7:50 - 8:30 PM", "event": "Session in RCC", "speaker": "Dr. TBA" },

  { "time": "8:30 PM", "event": "Closing Remark, Vote of Thanks Followed by Dinner", "speaker": "Dr. Sushant Mittal" }
];


// Day 2 Schedule data
const day2Schedule = [
  { "time": "10:00 - 10:25 AM", "event": "Registration & Breakfast", "speaker": "" },
  { "time": "10:25 - 10:30 AM", "event": "Welcome & Context Setting", "speaker": "Dr Sushant Mittal" },
  { "time": "10:30 - 10:45 AM", "event": "Recent Updates in Advanced Endometrial Cancer", "speaker": "Dr Jyoti Anand" },
  { "time": "10:45 - 11:00 AM", "event": "PARP inhibitors in Ovarian Cancer", "speaker": "Dr Nagender Sharma" },
  { "time": "11:00 - 11:45 AM", "event": "ISP- PROGRAM ON BREAST CANCER", "speaker": "Dr Marc Thill" },
  { "time": "11:45 - 12:10 PM", "event": "Revolutionize the Treatment Algorithm of Cervical Cancer", "speaker": "Dr Parveen Jain" },
  { "time": "12:15 - 12:30 PM", "event": "Management of Menopausal Symptoms after Cancer Treatment", "speaker": "Dr Samit Purohit" },
  { "time": "12:30 - 1:00 PM", "event": "Maximizing Outcomes in Front Line PTCL and sALCL with ADCETRIS", "speaker": "Dr Vipul Sheth" },
  { "time": "1:00 - 1:20 PM", "event": "Role of POLIVY 9 Polatuzumab Vedotin in untreated DLBCL", "speaker": "Dr TBA" },
  { "time": "1:20 - 1:40 PM", "event": "Bites and Car-T cell: A New Era of Hope in Multiple Myeloma", "speaker": "Dr Amrita Ramaswamy" },
  { "time": "1:40 - 2:00 PM", "event": "New Horizons: Treatment of Lower Risk Myelodysplastic Syndrome", "speaker": "Dr TBA" },
  { "time": "2:00 - 3:00 PM", "event": "Lunch", "speaker": "" },
  { "time": "3:00 - 3:20 PM", "event": "Scientific Advancement and Biology in Immunotherapy", "speaker": "Dr Sushant Mittal" },
  { "time": "3:20 - 3:50 PM", "event": "Panel Discussion on Immunotherapy", "speaker": "Dr TBA", "moderator": "Dr Manish Singhal", "panelists": ["Dr Atul Sharma", "Dr Akhil Kapoor", "Dr Ullas Batra"] },
  { "time": "3:50 - 4:20 PM", "event": "Quiz", "speaker": "Quiz Masters" },
  { "time": "4:20 onwards", "event": "Vote of Thanks & Closing", "speaker": "Dr Sushant Mittal" }
];


// Animation variants for schedule items
const scheduleItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

const SchedulePage = () => {
  // Set document title
  useEffect(() => {
    document.title = 'Schedule | Oncoshala-3 Conference';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="heading-2 mb-3">
              <span className="teal-gradient-text">Conference Schedule</span>
            </h1>
            <p className="subheading max-w-2xl mx-auto">
              Join us for two days of insightful sessions, expert presentations, and valuable networking opportunities
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="day1" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white/20 backdrop-blur-sm border border-white/20 p-1">
                  <TabsTrigger 
                    value="day1" 
                    className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Day 1 - April 5</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="day2" 
                    className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Day 2 - April 6</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="day1" className="mt-0 focus-visible:outline-none">
                <motion.div 
                  className="glass-card p-8 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="space-y-6">
                    {day1Schedule.map((item, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={scheduleItemVariants}
                        className="border-b border-teal-100 pb-6 last:border-b-0 flex flex-col md:flex-row md:items-start"
                      >
                        <div className="md:w-1/4 mb-2 md:mb-0">
                          <div className="flex items-center text-teal-700 font-medium">
                            <Clock className="w-4 h-4 mr-2 inline flex-shrink-0" />
                            <span>{item.time}</span>
                          </div>
                        </div>
                        <div className="md:w-3/4">
                          <h3 className="font-semibold text-lg mb-1">{item.event}</h3>
                          {item.speaker && <p className="text-foreground/70">{item.speaker}</p>}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="day2" className="mt-0 focus-visible:outline-none">
                <motion.div 
                  className="glass-card p-8 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="space-y-6">
                    {day2Schedule.map((item, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={scheduleItemVariants}
                        className="border-b border-teal-100 pb-6 last:border-b-0 flex flex-col md:flex-row md:items-start"
                      >
                        <div className="md:w-1/4 mb-2 md:mb-0">
                          <div className="flex items-center text-teal-700 font-medium">
                            <Clock className="w-4 h-4 mr-2 inline flex-shrink-0" />
                            <span>{item.time}</span>
                          </div>
                        </div>
                        <div className="md:w-3/4">
                          <h3 className="font-semibold text-lg mb-1">{item.event}</h3>
                          {item.speaker && <p className="text-foreground/70">{item.speaker}</p>}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 text-center">
              <div className="glass-card p-6 inline-block">
                <h3 className="font-semibold text-lg mb-2">Need More Information?</h3>
                <p className="text-foreground/80 mb-4">
                  Contact our conference team for detailed information about sessions and speakers.
                </p>
                <a 
                  href="#contact" 
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchedulePage;
