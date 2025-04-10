
import React from 'react';

const ContactSection: React.FC = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "87eac92e-dc5c-42ec-b99a-687d123ae309");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="container-section bg-gradient-to-b from-transparent to-teal-50/50">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="heading-2 mb-2 text-center">
          <span className="teal-gradient-text">Contact Us</span>
        </h2>
        
        <p className="subheading text-center mb-12">Have questions? We're here to help</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold mb-4">Contact Information</h3>
            <div className="flex mb-6">
          <img 
            src="/sparshlogo.webp" 
            alt="Sparssh Logo" 
            className="w-24 h-24 rounded-full border-4 border-teal-500 shadow-lg object-cover"
          />
        </div>
            
            <div className="space-y-4 text-foreground/80">
              <div>
                <p className="font-medium">General Inquiries:</p>
                <p>Sparssh.org</p>
              </div>
              
              <div>
                <p className="font-medium">Registration Support:</p>
                <p>Sparssh.org@gmail.com</p>
              </div>
              
              <div>
                <p className="font-medium">Sponsorship Opportunities:</p>
                <p>Sparssh.org@gmail.com</p>
              </div>
              
              <div>
                <p className="font-medium">Phone:</p>
                <p>+91 9319311009</p>
               
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold mb-4">Send us a Message</h3>
            
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-foreground/80 font-medium">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 border border-teal-100 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-foreground/80 font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border border-teal-100 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-foreground/80 font-medium">Message</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-teal-100 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[120px]"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                Send Message
              </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
