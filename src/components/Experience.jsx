import React from 'react';
import { Star, Shield, Award } from 'lucide-react';
import expImg from '../assets/images/MKF2.jpeg';

const Experience = () => {
  const handleWhatsApp = () => {
    const message = "Hello MFK Studio! I'm interested in booking an experience.";
    window.open(`https://wa.me/919311578400?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center min-h-[90vh]">
      
      {/* Absolute Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${expImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Very subtle dark gradient just to ensure white text is readable, no blur */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-cinzel text-white leading-tight mb-8 flex flex-col gap-2 drop-shadow-lg">
          <span className="block tracking-wider">LOOK GOOD.</span>
          <span className="block text-[#B88932] tracking-wider">FEEL BETTER.</span>
        </h2>
        
        <p className="text-lg md:text-2xl text-white/95 font-serif italic max-w-3xl mx-auto mb-6 leading-relaxed drop-shadow-md">
          "Step into a sanctuary designed around your comfort, confidence, and personal style. Where luxury meets expertise, and every detail is tailored to perfection."
        </p>

        <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md">
          At MFK Studio, we believe self-care is not a luxury, but a necessity. Our internationally trained professionals use only the finest products to deliver an unmatched salon experience that rejuvenates your body and soul.
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          <div className="flex flex-col items-center gap-3 drop-shadow-md">
            <div className="w-14 h-14 rounded-full bg-black/30 border border-[#B88932] flex items-center justify-center text-[#B88932]">
              <Star size={24} />
            </div>
            <span className="text-white text-[11px] font-bold tracking-widest uppercase">Premium Quality</span>
          </div>
          <div className="flex flex-col items-center gap-3 drop-shadow-md">
            <div className="w-14 h-14 rounded-full bg-black/30 border border-[#B88932] flex items-center justify-center text-[#B88932]">
              <Award size={24} />
            </div>
            <span className="text-white text-[11px] font-bold tracking-widest uppercase">Expert Stylists</span>
          </div>
          <div className="flex flex-col items-center gap-3 drop-shadow-md">
            <div className="w-14 h-14 rounded-full bg-black/30 border border-[#B88932] flex items-center justify-center text-[#B88932]">
              <Shield size={24} />
            </div>
            <span className="text-white text-[11px] font-bold tracking-widest uppercase">100% Hygienic</span>
          </div>
        </div>

        <button 
          onClick={handleWhatsApp}
          className="bg-[#B88932] text-white px-12 py-5 rounded-full font-semibold hover:bg-white hover:text-[#3A2920] transition-all duration-300 shadow-xl hover:-translate-y-1 tracking-[0.2em] text-sm uppercase"
        >
          BOOK YOUR EXPERIENCE
        </button>
      </div>

    </section>
  );
};

export default Experience;
