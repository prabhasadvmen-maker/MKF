import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { pricingData } from '../data/pricing';

const categories = Object.keys(pricingData);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const PriceList = () => {
  const handleWhatsAppBook = (serviceName, price) => {
    const message = `Hello MFK Studio! I would like to book an appointment for:\n\nService: *${serviceName}*\nPrice: *${price}*\n\nPlease let me know the available time slots.`;
    window.open(`https://wa.me/919311578400?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="price-list" className="py-24 bg-[var(--color-secondary)] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[var(--color-primary)] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#E6D5BD] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10 max-w-[1450px] relative z-10">
        
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
            <span>Investment</span>
            <span className="h-px w-8 bg-[#B88932]" />
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-dark-brown)] mb-4"
          >
            Price List
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-[var(--color-dark-brown)]/80 text-lg md:text-xl font-light italic max-w-2xl mx-auto"
          >
            "Transparent pricing, premium service."
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.8, delay: index * 0.15 } 
                }
              }}
              className="bg-[var(--color-primary)] rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 border border-[var(--color-gold)]/20 overflow-hidden flex flex-col"
            >
              {/* Card Header */}
              <div className="bg-[#E6D5BD]/40 py-6 text-center border-b border-[var(--color-gold)]/20">
                <h3 className="font-cinzel text-2xl font-bold tracking-widest text-[var(--color-dark-brown)]">
                  {category}
                </h3>
              </div>

              {/* Card Body / List */}
              <div className="p-6 md:p-8 flex-grow flex flex-col gap-6">
                {pricingData[category].map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleWhatsAppBook(item.name, item.price)}
                    className="flex justify-between items-end group cursor-pointer"
                    title="Click to book via WhatsApp"
                  >
                    <div className="flex flex-col relative z-10 bg-[var(--color-primary)] pr-2 transition-transform duration-300 group-hover:translate-x-1">
                      <span className="font-serif text-[17px] text-[var(--color-dark-brown)] font-medium leading-none group-hover:text-[#1D9B62] transition-colors">
                        {item.name}
                      </span>
                    </div>
                    
                    {/* Dotted connector */}
                    <div className="flex-grow border-b-[2px] border-dotted border-[var(--color-dark-brown)]/20 mb-[4px] mx-2 group-hover:border-[#1D9B62]/40 transition-colors" />
                    
                    <div className="relative z-10 bg-[var(--color-primary)] pl-2 flex items-center transition-transform duration-300 group-hover:-translate-x-2">
                      <span className="font-sans font-semibold text-[var(--color-gold)] group-hover:text-[#1D9B62] leading-none transition-colors">
                        {item.price}
                      </span>
                      <MessageCircle size={15} className="text-[#1D9B62] opacity-0 group-hover:opacity-100 transition-opacity absolute -right-6" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Decorative Edge */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#EFE4D3] via-[var(--color-gold)]/50 to-[#EFE4D3]" />
            </motion.div>
          ))}
        </div>
        
        {/* Subtle Footer Note */}
        <div className="text-center mt-16">
          <p className="text-sm text-[var(--color-dark-brown)]/60 font-light">
            * Prices may vary based on consultation and individual requirements.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PriceList;
