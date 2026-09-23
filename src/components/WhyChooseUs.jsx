import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ShieldCheck, UserCheck, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-[var(--color-gold)]" strokeWidth={1.5} />,
    title: 'Premium Products',
    description: 'Salon-grade products for the best results every time.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[var(--color-gold)]" strokeWidth={1.5} />,
    title: 'Hygienic & Safe',
    description: 'Clean, comfortable and hygienic environment always.',
  },
  {
    icon: <UserCheck className="w-8 h-8 text-[var(--color-gold)]" strokeWidth={1.5} />,
    title: 'Expert Professionals',
    description: 'Trained professionals delivering personalized care.',
  },
  {
    icon: <Heart className="w-8 h-8 text-[var(--color-gold)]" strokeWidth={1.5} />,
    title: 'Premium Experience',
    description: 'A calm, elegant and luxurious salon experience.',
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-secondary)]">
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-dark-brown)] mb-4">
            WHY CHOOSE MFK STUDIO
          </h2>
          <p className="text-[var(--color-dark-brown)]/70 text-lg font-light italic max-w-xl mx-auto">
            "Where every detail is crafted for your comfort and confidence."
          </p>
          <div className="w-24 h-[1px] bg-[var(--color-gold)] mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-[var(--color-white)] p-8 rounded-xl shadow-sm border border-transparent hover:border-[var(--color-gold)] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full bg-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-[var(--color-dark-brown)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--color-dark-brown)]/70 font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
