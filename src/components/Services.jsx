import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Eye, Star, Palette, Droplets, Flower2, Feather, Heart, User, Crown, Sun } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Luxury Nails",
    description: "Premium manicures, pedicures, extensions, and custom nail art.",
    icon: <Star size={24} />,
    color: "#B88932"
  },
  {
    id: 2,
    title: "Lash Extensions",
    description: "Custom volume, classic lash extensions and lifts for a mesmerizing look.",
    icon: <Eye size={24} />,
    color: "#8D6125"
  },
  {
    id: 3,
    title: "Flawless Makeup",
    description: "HD, Airbrush, Bridal, and Party makeup tailored to your features.",
    icon: <Sparkles size={24} />,
    color: "#B88932"
  },
  {
    id: 4,
    title: "Hair Styling",
    description: "Expert cuts, sleek blowouts, and elegant updos for any occasion.",
    icon: <Scissors size={24} />,
    color: "#8D6125"
  },
  {
    id: 5,
    title: "Hair Coloring",
    description: "Balayage, highlights, global color, and root touch-ups by experts.",
    icon: <Palette size={24} />,
    color: "#B88932"
  },
  {
    id: 6,
    title: "Hair Treatments",
    description: "Keratin, Hair Botox, and luxury hair spas for ultimate nourishment.",
    icon: <Droplets size={24} />,
    color: "#8D6125"
  },
  {
    id: 7,
    title: "Facials & Skincare",
    description: "Rejuvenating luxury facials tailored for glowing, healthy skin.",
    icon: <Flower2 size={24} />,
    color: "#B88932"
  },
  {
    id: 8,
    title: "Waxing & Threading",
    description: "Gentle and precise hair removal for smooth, flawless skin.",
    icon: <Feather size={24} />,
    color: "#8D6125"
  },
  {
    id: 9,
    title: "Massage Spa",
    description: "Relaxing head, neck, and shoulder massages to melt away stress.",
    icon: <Heart size={24} />,
    color: "#B88932"
  },
  {
    id: 10,
    title: "Men's Grooming",
    description: "Premium haircuts, beard styling, and complete grooming packages.",
    icon: <User size={24} />,
    color: "#8D6125"
  },
  {
    id: 11,
    title: "Bridal Packages",
    description: "Comprehensive luxury pre-wedding packages for a flawless glow.",
    icon: <Crown size={24} />,
    color: "#B88932"
  },
  {
    id: 12,
    title: "Body Polishing",
    description: "Exfoliating and brightening body spas for soft, radiant skin.",
    icon: <Sun size={24} />,
    color: "#8D6125"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-[#EFE4D3] text-[#3A2920] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6D5BD] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F8F3EA] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.42em] text-[#79562E] mb-4"
          >
            <span className="h-px w-8 bg-[#B88932]" />
            <span>What We Offer</span>
            <span className="h-px w-8 bg-[#B88932]" />
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-semibold text-[#8D6125]"
          >
            Signature Services
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.4, delay: index * 0.05 } 
                }
              }}
              className="group relative bg-[#F8F3EA] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#B88932]/10 hover:-translate-y-2 overflow-hidden"
            >
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B88932]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center bg-[#E6D5BD]/50 border border-[#B88932]/20 mb-6 group-hover:scale-110 transition-transform duration-500"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>

                <h3 className="font-serif text-2xl font-medium text-[#49362B] mb-3 group-hover:text-[#8D6125] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-[14px] leading-relaxed text-[#6B5140]">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#B88932] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 cursor-pointer">
                  <span>Explore</span>
                  <span className="w-4 h-px bg-[#B88932]" />
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
