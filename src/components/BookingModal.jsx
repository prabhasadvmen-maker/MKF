import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openBookingModal', handleOpen);
    return () => window.removeEventListener('openBookingModal', handleOpen);
  }, []);

  const [formData, setFormData] = useState({
    name: '', phone: '', service: '', date: '', time: '', message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.service) newErrors.service = 'Service is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const { name, phone, service, date, time, message } = formData;
    
    const whatsappMessage = `*New Appointment Request - MFK Studio*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n💅 *Service:* ${service}\n📅 *Date:* ${date}\n⏰ *Time:* ${time}\n💬 *Message:* ${message || 'No message'}\n\n_Sent via MFK Studio Website_`;

    const url = `https://wa.me/919311578400?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[var(--color-primary)] rounded-3xl shadow-2xl border border-[var(--color-gold)]/20 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#E6D5BD]/40 py-6 px-8 flex items-center justify-between border-b border-[var(--color-gold)]/20">
            <div>
              <h3 className="font-cinzel text-2xl font-bold tracking-widest text-[var(--color-dark-brown)]">Book Appointment</h3>
              <p className="text-sm font-light text-[var(--color-dark-brown)]/70 italic mt-1">Reserve your premium salon experience</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white text-[var(--color-dark-brown)] transition-colors border border-[var(--color-gold)]/20"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-dark-brown)]/80 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-[var(--color-dark-brown)]/20 focus:border-[var(--color-gold)]'} py-2 outline-none transition-colors text-[var(--color-dark-brown)]`}
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-dark-brown)]/80 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-[var(--color-dark-brown)]/20 focus:border-[var(--color-gold)]'} py-2 outline-none transition-colors text-[var(--color-dark-brown)]`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-dark-brown)]/80 mb-2">Service</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full bg-transparent border-b ${errors.service ? 'border-red-500' : 'border-[var(--color-dark-brown)]/20 focus:border-[var(--color-gold)]'} py-2 outline-none transition-colors text-[var(--color-dark-brown)]`}
              >
                <option value="" disabled>Select a service...</option>
                <option value="Hair">Hair</option>
                <option value="Nails">Nails</option>
                <option value="Lashes">Lashes</option>
                <option value="Makeup">Makeup</option>
              </select>
              {errors.service && <p className="text-red-500 text-[10px] mt-1">{errors.service}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-dark-brown)]/80 mb-2">Preferred Date</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.date ? 'border-red-500' : 'border-[var(--color-dark-brown)]/20 focus:border-[var(--color-gold)]'} py-2 outline-none transition-colors text-[var(--color-dark-brown)]`}
                />
                {errors.date && <p className="text-red-500 text-[10px] mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-dark-brown)]/80 mb-2">Preferred Time</label>
                <input 
                  type="time" 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.time ? 'border-red-500' : 'border-[var(--color-dark-brown)]/20 focus:border-[var(--color-gold)]'} py-2 outline-none transition-colors text-[var(--color-dark-brown)]`}
                />
                {errors.time && <p className="text-red-500 text-[10px] mt-1">{errors.time}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-dark-brown)]/80 mb-2">Message (Optional)</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="2"
                className="w-full bg-transparent border-b border-[var(--color-dark-brown)]/20 focus:border-[var(--color-gold)] py-2 outline-none transition-colors text-[var(--color-dark-brown)] resize-none"
                placeholder="Any special requests or details..."
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-[var(--color-gold)] text-white py-4 rounded-xl font-semibold hover:bg-[#a67b2c] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 tracking-widest text-sm uppercase"
              >
                CONFIRM BOOKING VIA WHATSAPP
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
