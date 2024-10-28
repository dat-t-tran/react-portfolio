import React, { useCallback } from "react";
import { assets } from "../../assets/assets.config";
import { classNames } from "../../utils/classNames";
import Badge from "../Badge/Badge";
import Figures from "../Figures/Figures";
import { listUsers, sourcesHero } from "../../constants";
import ImageResponsive from "../ImageResponsive";

const HeroSection: React.FC = React.memo((): JSX.Element => {
  const handleBookConsultation = useCallback(() => {
    // Handle book consultation logic
  }, []);

  const handleLearnMore = useCallback(() => {
    // Handle learn more logic
  }, []);

  return (
    <section className="py-10 xl:py-20 flex flex-col xl:flex-row xl:flex-wrap items-center self-stretch gap-6 xl:gap-0 xl:justify-between">
      <div className="xl:w-full self-start">
        <Badge
          description="Rated #1 choice for healthcare appointments by users"
          customClass="self-start"
        />
      </div>
      <div className="xl:w-[calc(50%+1rem)] self-start">
        <div className="my-6 lg:mt-10 xl:mb-16">
          <h1 className="mb-2 lg:mb-4 font-medium text-[2.5rem] lg:text-[5rem] leading-[3.5rem] lg:leading-[7.5rem] -tracking-[0.075rem] lg:-tracking-[0.15rem]">
            Connecting You <em className="text-primary font-cambo">to</em>{" "}
            Better Health
          </h1>
          <p className="text-secondary font-normal text-base leading-[1.8rem] -tracking-[0.02rem] lg:text-2xl lg:leading-[2.7rem] lg:-tracking-[0.03rem]">
            We're here to link you directly to improved health outcomes,
            effortlessly connecting you with the care you need.
          </p>
        </div>
      </div>
      <div className="xl:w-auto relative -mt-[2.32rem] -sm:mt-[2.31rem]">
        <Figures
          gap="gap-2"
          description={
            <span>
              Hours Of Patient <br /> Meetings
            </span>
          }
          customClass="py-2 px-4 sm:p-4 absolute top-0 right-0"
        >
          <div className="text-primary text-xl sm:text-5xl font-semibold leading-[1.875rem] sm:leading-[4.5rem] -tracking-[0.025rem] sm:-tracking-[0.06rem]">
            10K+
          </div>
        </Figures>
        <ImageResponsive
          sources={sourcesHero}
          originSrc={assets.hero.originHero}
          alt="Hero Banner"
          className="w-[19.36063rem] sm:w-[28.385rem] h-[17.59706rem] sm:h-[24.5rem] bg-[#d9d9d9] rounded-[1.05606rem] sm:rounded-[1.875rem] object-cover m-[1.32rem_0.81rem_3.02rem_1.27rem] sm:m-[2.31rem_3.62rem_4.44rem_2.37rem]"
          lazyLoad={true}
        />
        <Figures
          direction="flex-col"
          gap="gap-2 sm:gap-4"
          description={<span>patients have trusted us</span>}
          customClass="py-2 px-4 sm:p-4 absolute bottom-0 left-0"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="flex">
              {listUsers.map((item, index) => (
                <img
                  key={item.id}
                  className={classNames(
                    "w-10 h-10 rounded-full",
                    index > 0 ? "-ml-5" : ""
                  )}
                  src={item.image}
                  alt="User"
                  width={40}
                  height={40}
                />
              ))}
            </div>
            <span className="text-primary text-xl sm:text-[2.5rem] font-semibold leading-[1.875rem] sm:leading-[3.75rem] -tracking-[0.025rem] sm:-tracking-[0.05rem]">
              2.650+
            </span>
          </div>
        </Figures>
      </div>
      <div className="xl:w-full flex flex-col justify-center items-start gap-4 self-stretch md:items-center md:gap-6 md:flex-row md:justify-start xl:-mt-[2.44rem]">
        <button
          className="rounded-[99px] bg-primary text-white font-medium text-base xl:text-xl w-full xl:w-auto py-3 xl:py-4 xl:px-12"
          id="book-consultation"
          type="button"
          aria-label="Book Consultation"
          onClick={handleBookConsultation}
        >
          Book Consultation
        </button>
        <button
          className="rounded-[99px] text-primary font-medium text-base xl:text-xl w-full xl:w-auto py-3 xl:py-4 xl:px-12 border border-primary inline-flex justify-center items-center gap-2"
          id="learn-more"
          type="button"
          aria-label="Learn More"
          onClick={handleLearnMore}
        >
          Learn More{" "}
          <img
            src={assets.global.arrowRight}
            alt="Arrow Right"
            width={24}
            height={24}
          />
        </button>
      </div>
    </section>
  );
});

export default HeroSection;
