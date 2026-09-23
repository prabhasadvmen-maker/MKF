import React from 'react';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[var(--color-primary)]">
      <div className="container mx-auto px-4 md:px-8 max-w-[1450px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-dark-brown)] mb-4 tracking-wide">
            FIND US
          </h2>
          <div className="w-24 h-[1px] bg-[var(--color-gold)] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-[var(--color-secondary)] rounded-3xl overflow-hidden shadow-lg border border-[var(--color-gold)]/10">
          
          {/* Left: Contact Info */}
          <div className="p-8 md:p-14 flex flex-col justify-center bg-[var(--color-secondary)] relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold)]/5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-[var(--color-dark-brown)] mb-1">
              MFK NAIL STUDIO
            </h3>
            <p className="text-lg font-serif italic text-[var(--color-dark-brown)]/80 mb-4">
              by Maryam
            </p>
            <span className="text-[var(--color-gold)] font-semibold text-[11px] tracking-[0.3em] uppercase mb-10 block">
              NAILS || LASHES || MAKEUP || ACADEMY
            </span>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-5 group">
                <div className="mt-1 p-3.5 rounded-full bg-white text-[var(--color-gold)] shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-[var(--color-dark-brown)] font-semibold mb-1 uppercase tracking-widest text-xs">Address</h4>
                  <p className="text-[var(--color-dark-brown)]/80 font-light leading-relaxed">
                    Panchsheel Green-2 Mart,<br />
                    Ghaziabad, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="mt-1 p-3.5 rounded-full bg-white text-[var(--color-gold)] shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-[var(--color-dark-brown)] font-semibold mb-1 uppercase tracking-widest text-xs">Phone</h4>
                  <a href="tel:+919311578400" className="text-[var(--color-dark-brown)]/80 font-light hover:text-[var(--color-gold)] transition-colors text-lg">
                    +91 93115 78400
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="mt-1 p-3.5 rounded-full bg-white text-[var(--color-gold)] shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-[var(--color-dark-brown)] font-semibold mb-1 uppercase tracking-widest text-xs">Email</h4>
                  <a href="mailto:mfk.nailstudio@gmail.com" className="text-[var(--color-dark-brown)]/80 font-light hover:text-[var(--color-gold)] transition-colors">
                    mfk.nailstudio@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right: Map and Quick Action Icons */}
          <div className="relative h-[400px] lg:h-auto bg-[#E6D5BD]">
            {/* Google Map iframe */}
            <iframe 
              src="https://maps.google.com/maps?q=Panchsheel%20Green-2%20Mart,%20Ghaziabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-[1.1] opacity-90 mix-blend-multiply"
              title="MFK Studio Location"
            ></iframe>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
