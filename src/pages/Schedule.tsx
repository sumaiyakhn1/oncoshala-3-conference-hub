
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import ParticleBackground from '@/components/ParticleBackground';

// Day 1 Schedule data
const day1Schedule = [
  { time: "08:00 - 09:00", event: "Registration & Breakfast" },
  { time: "09:00 - 09:30", event: "Opening Ceremony" },
  { time: "09:30 - 10:30", event: "Keynote: Advances in Immunotherapy", speaker: "Dr. Sarah Johnson" },
  { time: "10:30 - 11:00", event: "Coffee Break" },
  { time: "11:00 - 12:30", event: "Panel Discussion: Precision Medicine in Oncology" },
  { time: "12:30 - 14:00", event: "Lunch & Networking" },
  { time: "14:00 - 15:30", event: "Parallel Sessions" },
  { time: "15:30 - 16:00", event: "Coffee Break" },
  { time: "16:00 - 17:30", event: "Poster Presentations" },
  { time: "19:00 - 21:00", event: "Welcome Dinner (Optional)" },
];

// Day 2 Schedule data
const day2Schedule = [
  { time: "08:30 - 09:00", event: "Breakfast" },
  { time: "09:00 - 10:00", event: "Keynote: AI in Cancer Diagnosis", speaker: "Prof. Michael Chen" },
  { time: "10:00 - 10:30", event: "Coffee Break" },
  { time: "10:30 - 12:00", event: "Workshop: Clinical Trial Design" },
  { time: "12:00 - 13:30", event: "Lunch & Networking" },
  { time: "13:30 - 15:00", event: "Parallel Sessions" },
  { time: "15:00 - 15:30", event: "Coffee Break" },
  { time: "15:30 - 16:30", event: "Panel: Future of Oncology Research" },
  { time: "16:30 - 17:00", event: "Closing Ceremony" },
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
