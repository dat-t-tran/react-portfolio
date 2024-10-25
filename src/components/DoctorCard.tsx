import React from 'react';

interface DoctorCardProps {
    _id: string;
    image: string;
    name: string;
    speciality: string;
    degree: string;
    experience: string;
    about: string;
    fees: number;
    address: {
        line1: string;
        line2: string;
    }
}

const DoctorCard: React.FC<DoctorCardProps> = ({ image, name, speciality }) => {
    return (
        <div className='flex-initial basis-1/5'>
            <div className="flex flex-col flex-1 pb-5 rounded-xl border border-indigo-200 border-solid">
                <div className="flex flex-col items-center px-8 pt-3 bg-indigo-50 rounded-xl aspect-square max-md:px-5">
                    <img loading="lazy" src={image} alt={`Dr. ${name}`} className="object-contain aspect-[0.8] w-[210px]" />
                </div>
                <div className="flex flex-col items-start pr-14 pl-4 mt-5 text-base max-md:pr-5">
                    <div className="ml-3.5 text-green-600 max-md:ml-2.5">Available</div>
                    <h3 className="mt-3 text-2xl font-medium text-gray-800">{name}</h3>
                    <div className="mt-5 text-gray-600">{speciality}</div>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;