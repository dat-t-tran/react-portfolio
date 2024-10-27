import React from 'react';
import Heading from '../Heading';
import { expertiesData } from '../../constants/expertiseData';
import Carousel from '../Carousel/Carousel';

const ExpertiseSection: React.FC = (): JSX.Element => {
  return (
    <section className="py-14 xl:py-[7.5rem]">
      <Heading
        seeAll={true}
        customClass="font-medium text-[2rem] xl:text-6xl leading-[3rem] xl:leading-[6.75rem] -tracking-[0.04rem] xl:-tracking-[0.075rem] flex items-center justify-between"
        onClick={() => {}}
      >
        <span>
          Choose Doctor's <em className="text-primary">Expertise</em>
        </span>
      </Heading>
      <Carousel items={expertiesData}></Carousel>
    </section>
  );
};

export default ExpertiseSection;
