
import React from 'react';

const VenueSection: React.FC = () => {
  return (
    <section id="venue" className="container-section bg-teal-50/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-2 mb-2 text-center">
          <span className="teal-gradient-text">Conference Venue</span>
        </h2>
        
        <p className="subheading text-center mb-12">Experience top-notch facilities in the dynamic heart of New Delhi.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* <div className="glass-card overflow-hidden h-full">
            <div className="h-64 md:h-80 bg-teal-200/30 flex items-center justify-center">
              <span className="text-teal-700 font-medium">Venue Image</span>
            </div>
          </div> */}
          
          <div className="glass-card overflow-hidden h-full">
  <div className="h-64 md:h-80 bg-teal-200/30 flex items-center justify-center">
    <img 
      src="/Pride Plaza Hotel.jpg" 
      alt="Venue" 
      className="h-full w-full object-cover"
    />
  </div>
</div>

          <div className="space-y-6">
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold mb-4">Pride Plaza Hotel, Aerocity,	New	Delhi</h3>
              <p className="text-foreground/80 mb-4">
              Located in New Delhi’s dynamic Aerocity, Pride Plaza Hotel offers advanced conference facilities, sophisticated accommodations, and a seamless blend of business and hospitality.
              </p>
              <div className="space-y-2 text-foreground/80">
                <p><strong>Address:</strong> Asset 5-A, Hospitality District, Indira Gandhi International Airport, Aerocity, New Delhi, Delhi 110037</p>
                <p><strong>Contact:</strong>1800 209 1400</p>
                <p><strong>Website:</strong>www.pridehotel.com</p>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-3">Accommodation</h3>
              <p className="text-foreground/80">
              Attendees can explore various accommodation options available nearby for a comfortable stay during the conference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
