import React, { Suspense } from 'react';
import Hero from '../components/Hero';

const About = React.lazy(() => import('../components/About'));
const Services = React.lazy(() => import('../components/Services'));
const Gallery = React.lazy(() => import('../components/Gallery'));
const Experience = React.lazy(() => import('../components/Experience'));
const PriceList = React.lazy(() => import('../components/PriceList'));
const Contact = React.lazy(() => import('../components/Contact'));

const Home = () => {
  return (
    <div className="bg-[var(--color-primary)] text-[var(--color-dark-brown)] font-sans antialiased">
      <main>
        <Hero />
        <Suspense fallback={<div className="h-40 flex items-center justify-center text-[var(--color-gold)]">Loading...</div>}>
          <About />
          <Services />
          <PriceList />
          <Gallery />
          <Experience />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
