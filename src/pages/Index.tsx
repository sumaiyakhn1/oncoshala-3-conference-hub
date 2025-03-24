
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LetterSection from '@/components/LetterSection';
import VenueSection from '@/components/VenueSection';
import ScheduleSection from '@/components/ScheduleSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  // Set document title
  useEffect(() => {
    document.title = 'Oncoshala-3 Conference';
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <LetterSection />
      <VenueSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
