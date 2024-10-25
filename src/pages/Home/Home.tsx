import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection';
// import SpecialitySection from '../components/SpecialitySection';
import DoctorsSection from '../../components/DoctorsSection';
// import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <DoctorsSection />
            {/* 
            <SpecialitySection />
            
            <CallToAction /> */}
        </>
    )
}

export default Home