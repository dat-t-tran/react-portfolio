import React from 'react';
import HeroSection from '../../components/HeroSection';
import ExpertiseSection from '../../components/ExpertiseSection';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';
import TestimonialsSection from '../../components/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <AboutUsSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;
