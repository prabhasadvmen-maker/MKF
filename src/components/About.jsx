import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImg from '../assets/images/MKF10.jpeg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });

      // Image reveal from left (clip-path)
      tl.fromTo('.about-image', 
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power3.inOut' }
      );

      // Label
      tl.from('.about-label', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.6');

      // Decorative Line
      tl.fromTo('.about-line',
        { width: 0 },
        { width: '60px', duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );

      // Heading (lines stagger up)
      tl.from('.about-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.2');

      // Body text
      tl.from('.about-body', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.4');

      // CTA Button
      tl.from('.about-cta', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.6');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 bg-[var(--color-secondary)] overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <div className="relative">
            <div className="about-image relative z-10 rounded-2xl overflow-hidden border-2 border-[var(--color-gold)] shadow-2xl p-2">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={aboutImg} 
                  alt="Inside MFK Studio" 
                  className="w-full h-auto object-cover md:h-[600px] will-change-transform"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[var(--color-primary)] rounded-full z-0 opacity-50" />
            <div className="absolute -top-8 -right-8 w-32 h-32 border border-[var(--color-gold)] rounded-full z-0 opacity-30" />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col z-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="about-label text-[var(--color-gold)] font-medium text-sm tracking-[0.2em] uppercase">
                ABOUT MFK STUDIO
              </span>
              <div className="about-line h-[1px] bg-[var(--color-gold)]" />
            </div>
            
            <h2 className="about-heading text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--color-dark-brown)] leading-tight mb-8">
              More than a salon, MFK Studio is a space created for beauty, self-care and confidence.
            </h2>
            
            <p className="about-body text-[var(--color-dark-brown)]/80 font-light text-lg leading-relaxed mb-10">
              At MFK Studio, every visit is crafted to be a personal experience. Our team of skilled professionals is dedicated to bringing out your best — whether it's a fresh haircut, flawless nails, stunning lashes or a complete makeup look. We believe beauty is self-care.
            </p>
            
            <div>
              <a href="#services" className="about-cta inline-block border-2 border-[var(--color-gold)] text-[var(--color-dark-brown)] px-8 py-3.5 rounded font-medium hover:bg-[var(--color-gold)] hover:text-white transition-colors duration-300 tracking-wide text-sm">
                DISCOVER MFK STUDIO
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
