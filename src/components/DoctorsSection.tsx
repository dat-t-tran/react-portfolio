import React from 'react';
import Heading from './Heading';
// import DoctorCard from './DoctorCard';
// import { doctors } from '../styles/assets';

// const expertises = [
//     { icon: "", title: "Cardiologist", content: "Heart specialist focusing on cardiovascular health and diseases." },
//     { icon: "", title: "Neurologist", content: "Doctor specializing in diagnosing and treating nervous system disorders." },
//     { icon: "", title: "ENT Specialist", content: "Doctor specializing in ear, nose, and throat disorders and surgeries." }
// ]

const DoctorsSection: React.FC = () => {
    return (
        <section className="py-14 xl:py-[7.5rem]">
            {/* <h2 className="text-4xl font-medium text-gray-800 text-center">Top Doctors to Book</h2>
            <p className="mt-4 text-lg text-center text-gray-600 max-md:max-w-full">
                Simply browse through our extensive list of trusted doctors.
            </p>
            <div className="flex flex-row flex-wrap gap-6">
                {doctors.map((doctor, index) => (
                    <DoctorCard key={index} {...doctor} />
                ))}
            </div>
            <button className="px-16 py-5 mt-16 max-w-full text-xl text-gray-600 whitespace-nowrap bg-indigo-50 rounded-[50px] w-[214px] max-md:px-5 max-md:mt-10">
                more
            </button> */}
            <Heading seeAll={true} customClass='font-medium text-[2rem] xl:text-6xl leading-[3rem]  xl:leading-[6.75rem] -tracking-[0.04rem] xl:-tracking-[0.075rem] flex items-center justify-between' onClick={() => { }}>
                <span>Choose Doctor's <em className='text-primary'>Expertise</em></span>
            </Heading>
            <div className='my-10'>
                <div></div>
            </div>
        </section>
    );
};

export default DoctorsSection;