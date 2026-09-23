import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919311578400" 
        target="_blank" 
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300"
      >
        <MessageCircle size={28} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-[#25D366] px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a 
        href="tel:+919311578400" 
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--color-dark-brown)] text-white shadow-[0_8px_30px_rgba(58,41,32,0.4)] hover:scale-110 transition-all duration-300 border border-[var(--color-gold)]/30"
      >
        <Phone size={28} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-[var(--color-dark-brown)] px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg border border-[var(--color-gold)]/20">
          Call Us
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
