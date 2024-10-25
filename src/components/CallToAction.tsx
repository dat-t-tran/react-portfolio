import React from 'react';

const CallToAction: React.FC = () => {
    return (
        <section className="px-20 mt-36 w-full bg-indigo-500 rounded-xl max-w-[1430px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex z-10 flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                        <h2 className="text-5xl font-bold text-white leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[77px] max-sm:leading-[50px]">
                            Book Appointment <br /> With 100+ Trusted Doctors
                        </h2>
                        <button className="self-start px-10 py-5 mt-9 text-xl text-gray-600 bg-white rounded-[50px] max-md:px-5 max-sm:mt-9">
                            Create account
                        </button>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/767185229206de996089afc15eb0dfc886561058e41b4ea5060ea6337bfeb8cd?placeholderIfAbsent=true&apiKey=1ae7deef7c76455dbf149b01128cd421" alt="Doctors and patients" className="object-contain grow mt-0 w-full aspect-[1.1] max-md:mt-0 max-md:max-w-full max-sm:mt-px" />
                </div>
            </div>
        </section>
    );
};

export default CallToAction;