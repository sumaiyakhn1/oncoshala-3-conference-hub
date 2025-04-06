
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LetterSection from '@/components/LetterSection';
import VenueSection from '@/components/VenueSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import SchedulePreviewSection from '@/components/SchedulePreviewSection';
import InternationalSpeakerSection from '@/components/InternationalSpeakerSection';
import DirectorSection from '@/components/DirectorSection';

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
      <DirectorSection />
      <InternationalSpeakerSection />
      <SchedulePreviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
