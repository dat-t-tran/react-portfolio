import React from "react";
import Badge from "../Badge";
import ImageResponsive from "../ImageResponsive";
import { sourcesAboutUs } from "../../constants";
import { assets } from "../../assets/assets.config";
import Figures from "../Figures";

const AboutUsSection: React.FC = (): JSX.Element => {
  return (
    <section className="py-14 flex flex-col xl:flex-row justify-center items-start gap-6 xl:gap-10">
      <div className="xl:w-1/2 w-auto flex flex-col justify-center xl:justify-start gap-6">
        <Badge
          description="Rated #1 for appointments with many professional doctors"
          customClass="inline-flex xl:hidden"
        />
        <ImageResponsive
          sources={sourcesAboutUs}
          originSrc={assets.aboutUs.originAboutUs}
          alt="About Us Banner"
          className="w-full xl:w-auto rounded-xl object-cover"
          lazyLoad={true}
        />
      </div>
      <div className="xl:w-1/2 flex flex-col justify-center items-start gap-6 xl:gap-10">
        <Badge
          description="Rated #1 for appointments with many professional doctors"
          customClass="hidden xl:inline-flex"
        />
        <p className="text-lg sm:text-[2rem] font-medium leading-[1.8rem] sm:leading-[3rem] -tracking-[0.0225rem] -sm:tracking-[0.04rem]">
          We're revolutionizing healthcare with seamless access to trusted
          professionals, prioritizing your journey to better health.
        </p>
        <div className="relative w-full">
          <Figures
            gap="gap-2"
            direction="flex-col"
            rounded={false}
            description={<>Dedicated Doctors</>}
            customClass="top-0 left-0"
          >
            <div className="text-primary text-[2.5rem] sm:text-[4rem] font-medium leading-[3.75rem] sm:leading-[6rem] -tracking-[0.05rem] sm:-tracking-[0.08rem]">
              40K+
            </div>
          </Figures>
          <Figures
            gap="gap-2"
            direction="flex-col"
            rounded={false}
            description={<>Hours of Patient Consultations</>}
            customClass="absolute top-0 right-0"
          >
            <div className="text-primary text-[2.5rem] sm:text-[4rem] font-medium leading-[3.75rem] sm:leading-[6rem] -tracking-[0.05rem] sm:-tracking-[0.08rem]">
              10K+
            </div>
          </Figures>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
