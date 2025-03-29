
import React from 'react';

const LetterSection: React.FC = () => {
  return (
    <section id="about" className="container-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-2 mb-10 text-center">
          <span className="teal-gradient-text">Welcome Letter</span>
        </h2>
        
        <div className="glass-card p-8 md:p-12 mt-6">
          <div className="flex flex-col space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              Dear Colleagues and Distinguished Guests,
            </p>
            
            <p className="leading-relaxed">
            It is my great pleasure to invite you back to <strong>Oncoshala-3 2025</strong>, taking place from <strong>5 and 6 April 2025 at Pride Plaza ,Aero city, New Delhi</strong>. Building on the success of previous seminars, this two- day event promises to unite the Pan-India oncology community for an engaging experience filled with knowledge-sharing, collaboration, and networking. Guided by Oncoshala-3's vision for 2025, <strong>"Innovating Oncology: Bridging Research, Practice, and Patient Care,"</strong> the event underscores our collective commitment to integrating innovation, evidence-based practices, and patient-centered care in oncology.
            </p>
            
            <p className="leading-relaxed">
            Organized under the aegis of <strong>SPARSSH (Society for Promotion, Activation & Research for Scientific Social Helps)</strong>, This programme will include state-of-the-art sessions, interactive panel discussions, pitch presentations, and debates, encouraging active participation and knowledge exchange. Highly renowned experts will share their insights through symposia, teaching lectures, and joint sessions with partner associations, fostering collaboration across disciplines and communities.
            </p>
            
            <p className="leading-relaxed">
            <strong>Event Details:</strong>
            <ul className="list-disc pl-5">
          <li>
             <strong>Date & Time:</strong>
          <ul className="list-[circle] pl-5">
          <li><strong>Day 1:</strong> 5th April 2025, 10:00 AM to 8:30 PM</li>
          <li><strong>Day 2:</strong> 6th April 2025, 10:00 AM to 4:30 PM</li>
          </ul>
          </li>
          <li><strong>Venue:</strong> Pride Plaza, Aero City, New Delhi.</li>
          </ul>
            </p>
            
            <p className="leading-relaxed">
            We look forward to welcoming you to Oncoshala-3. 
            </p>
            
            <p className="leading-relaxed">
            For any queries or to confirm your attendance, contact us at <strong>+91-931-931-009</strong> or via email at <strong>sparssh.org@gmail.com.</strong>
            </p>

          

            
            
            <div className="mt-8">
              <p className="font-medium">Warm regards,</p>
              <p className="font-display text-xl mt-2">Dr. Sushant Mittal</p>
              <p className="text-sm text-foreground/70">Conference Chair, Oncoshala-3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
