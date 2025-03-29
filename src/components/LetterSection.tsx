
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
              On behalf of the Organizing Committee, it is my great pleasure to welcome you to the third edition of Oncoshala, the International Conference on Innovations in Oncology Research and Treatment, to be held on April 5-6, 2024, at the Grand Hyatt, Singapore.
            </p>
            
            <p className="leading-relaxed">
              Oncoshala-3 aims to bring together leading oncologists, researchers, and healthcare professionals from around the world to share and discuss the latest advancements, challenges, and opportunities in cancer research and treatment. This year's conference will focus on emerging technologies, personalized medicine approaches, and collaborative strategies to improve patient outcomes.
            </p>
            
            <p className="leading-relaxed">
              We have planned an extensive scientific program featuring keynote lectures, panel discussions, interactive workshops, and poster presentations. In addition, there will be ample networking opportunities to facilitate meaningful connections and potential collaborations.
            </p>
            
            <p className="leading-relaxed">
              Singapore, with its state-of-the-art facilities and vibrant culture, provides the perfect backdrop for our gathering. We hope you will also take the time to explore this beautiful city-state during your stay.
            </p>
            
            <p className="leading-relaxed">
              We look forward to your active participation and contribution to make Oncoshala-3 a resounding success. Together, let us continue to push the boundaries of oncology research and improve the lives of cancer patients worldwide.
            </p>
            
            <div className="mt-8">
              <p className="font-medium">Mai hu don,</p>
              <p className="font-display text-xl mt-2">Dr. Jonathan Chen</p>
              <p className="text-sm text-foreground/70">Conference Chair, Oncoshala-3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
