import React from 'react';
import { specialityData } from '../assets/assets.config';

interface Speciality {
    image: string;
    speciality: string;
}

const specialities: Speciality[] = specialityData;

const SpecialitySection: React.FC = () => {
    return (
        <section className="mt-28 max-md:mt-10">
            <div className="flex items-center flex-col">
                <h2 className="text-4xl font-medium text-gray-800 text-center">Find by Speciality</h2>
                <p className="mt-7 text-lg leading-7 text-center text-gray-600 max-md:max-w-full md:w-[573px]">
                    Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                </p>
            </div>
            <div className="flex flex-wrap gap-5 justify-between mt-16 ml-auto mr-auto max-w-full text-lg text-center text-gray-600 w-[969px] max-md:mt-10 max-sm:justify-center ">
                {specialities.map((speciality, index) => (
                    <div key={index} className="flex flex-col">
                        <img loading="lazy" src={speciality.image} alt={speciality.speciality} className="object-contain aspect-square w-[126px] max-md:mr-2 max-md:ml-2.5" />
                        <div className="mt-6">{speciality.speciality}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpecialitySection;