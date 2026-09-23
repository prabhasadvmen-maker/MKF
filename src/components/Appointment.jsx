import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
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
    
    const whatsappMessage = `*New Appointment Request - MFK Studio*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
💅 *Service:* ${service}
📅 *Date:* ${date}
⏰ *Time:* ${time}
💬 *Message:* ${message || 'No message'}

_Sent via MFK Studio Website_`;

    const url = `https://wa.me/919311578400?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="appointment" className="py-24 bg-[var(--color-secondary)]">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-dark-brown)] mb-4">
            BOOK AN APPOINTMENT
          </h2>
          <p className="text-[var(--color-dark-brown)]/80 text-lg md:text-xl font-light italic max-w-2xl mx-auto">
            "Reserve your spot at MFK Studio."
          </p>
          <div className="w-24 h-[1px] bg-[var(--color-gold)] mx-auto mt-6" />
        </div>

        {/* Booking Form */}
        <div className="bg-[var(--color-primary)] p-8 md:p-12 rounded-2xl shadow-sm border border-[var(--color-gold)]/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-[var(--color-dark-brown)] font-medium mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-[var(--color-dark-brown)]/30 focus:border-[var(--color-gold)]'} py-3 px-2 outline-none transition-colors text-[var(--color-dark-brown)] placeholder:text-[var(--color-dark-brown)]/30`}
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm text-[var(--color-dark-brown)] font-medium mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-[var(--color-dark-brown)]/30 focus:border-[var(--color-gold)]'} py-3 px-2 outline-none transition-colors text-[var(--color-dark-brown)] placeholder:text-[var(--color-dark-brown)]/30`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm text-[var(--color-dark-brown)] font-medium mb-2">Service *</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full bg-transparent border-b ${errors.service ? 'border-red-500' : 'border-[var(--color-dark-brown)]/30 focus:border-[var(--color-gold)]'} py-3 px-2 outline-none transition-colors text-[var(--color-dark-brown)] appearance-none`}
              >
                <option value="" disabled>Select a service</option>
                <option value="Hair">Hair</option>
                <option value="Nails">Nails</option>
                <option value="Lashes">Lashes</option>
                <option value="Makeup">Makeup</option>
              </select>
              {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-[var(--color-dark-brown)] font-medium mb-2">Preferred Date *</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.date ? 'border-red-500' : 'border-[var(--color-dark-brown)]/30 focus:border-[var(--color-gold)]'} py-3 px-2 outline-none transition-colors text-[var(--color-dark-brown)]`}
                />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className="block text-sm text-[var(--color-dark-brown)] font-medium mb-2">Preferred Time *</label>
                <input 
                  type="time" 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.time ? 'border-red-500' : 'border-[var(--color-dark-brown)]/30 focus:border-[var(--color-gold)]'} py-3 px-2 outline-none transition-colors text-[var(--color-dark-brown)]`}
                />
                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-[var(--color-dark-brown)] font-medium mb-2">Message (Optional)</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-transparent border-b border-[var(--color-dark-brown)]/30 focus:border-[var(--color-gold)] py-3 px-2 outline-none transition-colors text-[var(--color-dark-brown)] placeholder:text-[var(--color-dark-brown)]/30 resize-none"
                placeholder="Any special requests or details..."
              ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-6 text-center">
              <button 
                type="submit" 
                className="w-full md:w-auto bg-[var(--color-gold)] text-white px-12 py-4 rounded font-medium hover:bg-[#a67b2c] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 tracking-wide"
              >
                BOOK APPOINTMENT
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Appointment;
