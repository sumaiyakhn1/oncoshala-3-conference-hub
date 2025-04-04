
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import ParticleBackground from '@/components/ParticleBackground';

// Day 1 Schedule data
const day1Schedule = [
  { "time": "TIME", "event": "EVENT", "speaker": " " },
  { "time": "10:00 - 10:30 AM", "event": "Registration", "speaker": " " },
  { "time": "10:30 - 10:35 AM", "event": "Welcome & Context Setting", "speaker": "Dr. Sushant Mittal" },
  { "time": "Session 1", "event": "SESSION 1 - Genetic & Preventive Oncology", "speaker": "" },
  { "time": " ", "event": "CHAIRPERSONS", "speaker": "Dr Rakesh Chopra, Dr Manoj Sharma, Dr SK Poddar" },

  { "time": "10:35 - 11:05 AM", "event": "Cancer  Screening: LDCT and beyond ", "speaker": "Dr. Abhishek Shankar" },
  { "time": "11:05 - 11:30 AM", "event": "Role of Liquid Biopsy in Future Cancer Diagnosis & Management", "speaker": "Dr. Anshul Gupta" },

  { "time": "Session 2", "event": "SESSION 2 - Head & Neck Cancer", "speaker": "" },
  { "time": "", "event": "CHAIRPERSONS", "speaker": "Dr Rakesh Chopra, Dr S P Kataria, Dr SK Poddar" },
  { "time": "11:30 - 12:00 PM", "event": "NGS in H&N Cancer", "speaker": "Dr. Aparna Dhar" },
  { "time": "12:30 - 1:00 PM", "event": "Role of Nimotuzumab in Locally advanced Head & Neck Cancer", "speaker": "Dr. Mohit Saxena, Dr. Samit Purohit " },
  { "time": "1:00 - 1:50 PM", "event": "Lunch", "speaker": " " },
  { "time": "1:50 - 2:10 PM", "event": "Role of IO and its Sequencing strategy in the Management of HNSCC", "speaker": "Dr. Ankur Varshney" },

  { "time": "Session 3", "event": "SESSION 3 - Breast Cancer", "speaker": "" },
  { "time": "", "event": "CHAIRPERSONS", "speaker": "Dr GK Jadhav, Dr Arun Giri, Dr. Kapil Kumar" },
  { "time": "2:10 - 2:40 PM", "event": "Case-based Panel Discussion: HR+/HER2 Low MBC", "speaker": " " },
  { "time": "", "event": "MODERATOR", "speaker": "Dr. Pankaj Goyal" },
  { "time": "", "event": "Panelists", "speaker": "Dr Ajay Gupta, Dr Deepak Singla, Dr. Devashish Tripathi, Dr Kuldeep Sharma, Dr Saurabh Mishra, Dr Sunil Pasricha, Dr Parveen Jain"},

  { "time": "2:40 - 3:10 PM", "event": "Impact of Subcutaneous Dual HER2 Blockade on Patients of HER2+ve Breast Cancer (session supported by Roche)", "speaker": "Dr. Ankur Varshney" },
  { "time": "3:10 - 3:30 PM", "event": "Evolving evidence for the multi-verse of HER2+/HER2-ABC Patients", "speaker": "Dr. Priya Tiwari" },
  { "time": "3:30 - 3:50 PM", "event": "Role of Immunotherapy and Its Sequencing Strategy in Advanced TNBC", "speaker": "Dr. Mukesh Patekar" },

  { "time": "Session 4", "event": "Session 4- Lung Cancer", "speaker": "" },
  { "time": "", "event": "Chairperson", "speaker": "Dr Shuaib Zaidi, Dr Kaushal Kalra, Dr JK Saini, Dr Sapna Manocha" },
  { "time": "3:50 - 4:20 PM", "event": "Panel discussion - Integrating I/O in management of early Lung in both Operative and inoperative setting.", "speaker": " " },
  { "time": "", "event": "Moderator", "speaker": "Dr Sunil Kumar Gupta" },
  { "time": "", "event": "Panelist.", "speaker": "Dr Saurabh Mishra, Dr Durgatosh Pandey, Dr Dodul Mondal, Bhushan Thombare, Dr Abhishek Bansal, Dr Manish Sahni, Dr Shina Goyal" },
  { "time": "4:20 - 4:40 PM", "event": "Optimising Treatment Strategies in Management of mNSCLC (Sesssion supported by Roche)", "speaker": "Dr. Shefali Sardana" },
  { "time": "4:40 - 5:00 PM", "event": "Non-Squamous mNSCLC - The Way Forward: The Breakthrough of Immunotherapy", "speaker": "Dr. Mohit Agarwal" },
  { "time": "5:00 - 5:20 PM", "event": "Role of Tecentriq in Management ofES-SCLC (Sesssion supported by Roche)", "speaker": "Dr. Tarun Durga" },
  { "time": "5:20 - 5:35 PM", "event": "Optimising Treatments in Advanced EGFRM Lung Cancer", "speaker": "Dr. Parveen Jain" },
  { "time": "5:35 - 5:45 PM", "event": "A new Era in Limited -Stage Small Cell Lung Cancer Treatment : Integration of Immunotherapy into LS-SCLCC", "speaker": "Dr Sushant Mittal" },
  { "time": "5:45 - 6:00 PM ", "event": "Redefining the First Line management of ALK Rearranged NSCLC.", "speaker": "Dr Shiv Shankara" },

  { "time": "Session 5", "event": "Session 5- GI Cancer", "speaker": "" },
  { "time": "", "event": "Chairperson", "speaker": "Dr Kapil Kumar,Dr Parveen Garg, Dr Subhash Gupta, Dr Ankit Batra" },
  { "time": "6:00 - 6:20 PM", "event": " Role of Ramucirumab in Advanced Gastric Cancer (Session Supported by E.Lilly)", "speaker": "Dr. Vikas Talreja" },
  { "time": "6:20 - 6:50 PM", "event": "Panel Discussion - The Immuno-Oncology Frontier IO+IO: Redefining uHCC Management in a New Era", "speaker": "" },
  { "time": "", "event": "Moderator", "speaker": "Dr. Aditya Sarin" },
  { "time": "", "event": "Panelists", "speaker": "Dr. Ishu Gupta, Dr Raghu Ram, Dr Nikhil Himtani, Dr Sunil Pasricha, Dr Shiv Shankara, Dr Deepika Chauhan, Dr Tarun Durga" },
  { "time": "6:50 - 7:10 PM", "event": "Real world evidence of Atezolizumab & Bevacizumab in HCC (Sesssion supported by Roche)", "speaker": "Dr Samit Purohit" },
  { "time": "7:10 - 7:30 PM", "event": "Bridging the Gap in Metastatic Pancreatic Cancer with Nal-IRI (Session Supported By Servier)", "speaker": "Dr. Jasmin Porwal" },

  { "time": "Session 6", "event": "Session 6- GU Cancer", "speaker": "" },
  { "time": "", "event": "Chairperson", "speaker": "Dr. S K Poddar, Dr Haresh KP, Dr Vikar Talreja" },
  { "time": "7:30 - 7:50 PM", "event": "Illuminating Optimum Management of Advanced Bladder Cancer", "speaker": "" },
  { "time": "", "event": "Moderator", "speaker": "Dr Vineet Govind Gupta" },
  { "time": "", "event": "Panalists", "speaker": "Dr Amit Badola, G Mehar, Dr Sandeep Tiwari, Dr Saurabh Mishra" },
  { "time": "7:50 - 8:30 PM", "event": " Improving Survival & Quality of Life in front line advanced RCC with CTLA-4 & PD-1 Inhibitor. ", "speaker": "" },
  { "time": "", "event": "Moderator", "speaker": "Dr Rajat Bajaj" },
  { "time": "", "event": "Panalist/Speaker", "speaker": "Dr Ankit Batra, Dr Ashutosh Jain, Dr K Medhi, Dr Rajeev Gupta " },
  { "time": "8:30 PM", "event": "Closing Remark, Vote of Thanks Followed by Dinner", "speaker": "Dr. Sushant Mittal" }
];


// Day 2 Schedule data
const day2Schedule = [
  { "time": "TIME", "event": "EVENT", "speaker": " " },
  { "time": "10:00 - 10:25 AM", "event": "Registration", "speaker": "" },
  { "time": "", "event": "Breakfast", "speaker": "" },
  { "time": "10:25 - 10:30 AM", "event": "Welcome & Context Setting", "speaker": "Dr Sushant Mittal" },
 
  { "time": "Session 7", "event": "Session 7- Gynecologic Oncology", "speaker": "" },
  { "time": "", "event": "Chairperson", "speaker": "Dr Arun Kumar Goel, Dr Manoj Sharma, Dr SK Poddar, Dr Bhawna Garg, Dr Parveen Garg" },
  { "time": "10:30 - 10:45 AM", "event": "Recent Updates in Advanced Endometrial Cancer", "speaker": "Dr Ravinder Malwal" },
  { "time": "10:45 - 11:00 AM", "event": "PARP inhibitors in Ovarian Cancer", "speaker": "Dr Deepak Singla" },
  { "time": "11:00 - 11:45 AM", "event": "ISP- PROGRAM ON BREAST CANCER", "speaker": "" },
  { "time": "", "event": "ISP on EBC", "speaker": "" },
  { "time": "", "event": "From Risk to Results:Advancing care with Abemaciclib in HR+ HER2-EBC & MBC", "speaker": "Dr Marc Thill" },
  { "time": "", "event": "PANELISTS/SPEAKER", "speaker": "Dr Aditya Murli, Dr M V Chandrakant" },


  { "time": "11:45 - 12:05 PM", "event": "Revolutionize the Treatment Algorithm of Cervical Cancer", "speaker": "Dr Parveen Jain" },
  { "time": "12:05 - 12:15 PM", "event": "Gyne  Cancer Survivorship : From Battling cancer to embracing life", "speaker": "Dr Abhishek Shankar" },
 

  { "time": "Session 8", "event": "Session 8: Hematology", "speaker": "" },
  { "time": "", "event": "Chairperson", "speaker": "Dr Shishir Seth, Dr Samit Purohit" },
  { "time": "12:15 - 12:30 PM", "event": "Future Directions in Aml Management : A 2025 Perspective", "speaker": "Dr Swapnil Tripathi" },
  { "time": "12:30 - 1:00 PM", "event": "Maximizing Outcomes in Front Line PTCL and sALCL with ADCETRIS", "speaker": "Dr Vipul Sheth" },
  { "time": "1:00 - 1:20 PM", "event": "Role of POLIVY (Polatuzumab Vedotin) in untreated DLBCL (Sesssion supported by Roche)", "speaker": "Dr Peush Bajpai" },
  { "time": "1:20 - 1:40 PM", "event": "Bites and Car-T cell: A New Era of Hope in Multiple Myeloma", "speaker": "Dr Amrita Ramaswamy" },
  { "time": "1:40 - 2:00 PM", "event": "New Horizons: Treatment of Lower Risk Myelodysplastic Syndrome", "speaker": "Dr Tulika Seth" },
  { "time": "2:00 - 3:00 PM", "event": "Lunch", "speaker": "" },
 

  { "time": "Session 9", "event": "Session 9: Immuno Oncology", "speaker": "" },
  { "time": "3:00 - 3:20 PM", "event": "Scientific Advancement and Biology in Immunotherapy", "speaker": "Dr Sushant Mittal" },
  { "time": "3:20 - 4:20 PM", "event": "Quiz", "speaker": "Quiz Masters" },
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
                            {/* <Clock className="w-4 h-4 mr-2 inline flex-shrink-0" /> */}
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
                            {/* <Clock className="w-4 h-4 mr-2 inline flex-shrink-0" /> */}
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
