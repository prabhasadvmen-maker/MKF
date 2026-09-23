import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Experience from '../components/Experience';
import PriceList from '../components/PriceList';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="bg-[var(--color-primary)] text-[var(--color-dark-brown)] font-sans antialiased">
      <main>
        <Hero />
        <About />
        <Services />
        <PriceList />
        <Gallery />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
