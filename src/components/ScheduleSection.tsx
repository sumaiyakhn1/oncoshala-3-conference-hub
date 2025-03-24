
import React from 'react';

const ScheduleSection: React.FC = () => {
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

  return (
    <section id="schedule" className="container-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-2 mb-2 text-center">
          <span className="teal-gradient-text">Conference Schedule</span>
        </h2>
        
        <p className="subheading text-center mb-12">Two days of insightful sessions and networking</p>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold mb-4 text-teal-700">Day 1: April 5</h3>
              
              <div className="space-y-4">
                {day1Schedule.map((item, index) => (
                  <div key={index} className="border-b border-teal-100 pb-4 last:border-b-0">
                    <div className="font-medium text-teal-800">{item.time}</div>
                    <div className="font-semibold mt-1">{item.event}</div>
                    {item.speaker && <div className="text-sm text-foreground/70 mt-1">{item.speaker}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold mb-4 text-teal-700">Day 2: April 6</h3>
              
              <div className="space-y-4">
                {day2Schedule.map((item, index) => (
                  <div key={index} className="border-b border-teal-100 pb-4 last:border-b-0">
                    <div className="font-medium text-teal-800">{item.time}</div>
                    <div className="font-semibold mt-1">{item.event}</div>
                    {item.speaker && <div className="text-sm text-foreground/70 mt-1">{item.speaker}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
