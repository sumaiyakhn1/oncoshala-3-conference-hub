
import React from 'react';

const VenueSection: React.FC = () => {
  return (
    <section id="venue" className="container-section bg-teal-50/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-2 mb-2 text-center">
          <span className="teal-gradient-text">Conference Venue</span>
        </h2>
        
        <p className="subheading text-center mb-12">Experience world-class facilities in the heart of Singapore</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="glass-card overflow-hidden h-full">
            <div className="h-64 md:h-80 bg-teal-200/30 flex items-center justify-center">
              <span className="text-teal-700 font-medium">Venue Image</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold mb-4">Grand Hyatt Singapore</h3>
              <p className="text-foreground/80 mb-4">
                Located in the heart of Singapore's vibrant Orchard Road, Grand Hyatt Singapore offers world-class conference facilities, luxurious accommodations, and exceptional dining options.
              </p>
              <div className="space-y-2 text-foreground/80">
                <p><strong>Address:</strong> 10 Scotts Road, Singapore 228211</p>
                <p><strong>Contact:</strong> +65 6738 1234</p>
                <p><strong>Email:</strong> singapore.grand@hyatt.com</p>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-3">Accommodation</h3>
              <p className="text-foreground/80">
                Special conference rates are available for attendees. Please mention "Oncoshala-3" when booking your stay. Alternatively, we have partnerships with nearby hotels offering various price ranges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
