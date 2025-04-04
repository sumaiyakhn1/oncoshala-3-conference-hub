
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const SchedulePreviewSection: React.FC = () => {
  return (
    <section className="container-section">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-3/4">
              <h2 className="heading-3 mb-3">
                <span className="teal-gradient-text">Conference Schedule</span>
              </h2>
              
              <p className="text-foreground/80 mb-6">
                Join us for two exciting days of keynote speeches, panel discussions, 
                and interactive workshops. Check out our detailed schedule to plan your conference experience.
              </p>
              
              <div className="flex items-center text-foreground/70 text-sm mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span>April 5-6, 2025</span>
              </div>
              
              <Link to="/schedule">
                <Button className="group bg-teal-600 hover:bg-teal-700">
                  View Full Schedule 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            
            <div className="md:w-1/4 flex justify-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-300 text-white">
                <Calendar className="w-12 h-12" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SchedulePreviewSection;
