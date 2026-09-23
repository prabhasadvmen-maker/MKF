import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1F1611] text-[#EFE4D3] pt-20 pb-8 border-t border-[#B88932]/20">
      <div className="container mx-auto px-6 md:px-10 max-w-[1450px]">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <h3 className="font-cinzel text-3xl font-bold text-white mb-2 tracking-widest">
              MFK <span className="text-[#B88932]">STUDIO</span>
            </h3>
            <span className="text-[#B88932] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              Unisex Salon
            </span>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm font-light">
              Step into a sanctuary designed around your comfort, confidence, and personal style. Where luxury meets expertise, and every detail is tailored to perfection.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/mfk_studio?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#B88932] hover:text-white hover:border-[#B88932] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#B88932] hover:text-white hover:border-[#B88932] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#B88932] hover:text-white hover:border-[#B88932] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">Home</a></li>
              <li><a href="#about" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">About Us</a></li>
              <li><a href="#services" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">Our Services</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">Gallery</a></li>
              <li><a href="#price-list" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">Price List</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">Luxury Hair Styling</a></li>
              <li><a href="#services" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">Bridal Makeup</a></li>
              <li><a href="#services" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">Premium Nail Art</a></li>
              <li><a href="#services" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">Lash Extensions</a></li>
              <li><a href="#services" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">Body Spa & Massages</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Get in Touch</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#B88932] mt-0.5 flex-shrink-0" />
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  Panchsheel Green-2 Mart,<br />
                  Ghaziabad, Uttar Pradesh
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#B88932] flex-shrink-0" />
                <a href="tel:+919311578400" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">
                  +91 93115 78400
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-[#B88932] flex-shrink-0" />
                <a href="https://wa.me/919311578400" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">
                  +91 93115 78400
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#B88932] flex-shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:mfk.nailstudio@gmail.com" className="text-white/60 hover:text-[#B88932] transition-colors text-sm font-light">
                  mfk.nailstudio@gmail.com
                </a>
              </div>
            </div>
            
            <button 
              onClick={() => window.dispatchEvent(new Event('openBookingModal'))}
              className="mt-8 w-full bg-white/5 border border-[#B88932]/30 text-white px-6 py-3 rounded hover:bg-[#B88932] hover:border-[#B88932] transition-all duration-300 text-xs tracking-widest uppercase font-semibold"
            >
              Book Appointment
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-light">
            &copy; {new Date().getFullYear()} MFK Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white text-xs font-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-xs font-light transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
