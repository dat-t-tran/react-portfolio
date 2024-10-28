import React from "react";
import Heading from "../Heading";
import Carousel from "../Carousel";
import { testimonialsData } from "../../constants";

const TestimonialsSection: React.FC = (): JSX.Element => {
  return (
    <section className="py-14 xl:py-[7.5rem]">
      <Heading
        seeAll={true}
        customClass="font-medium text-[2rem] xl:text-6xl leading-[3rem] xl:leading-[6.75rem] -tracking-[0.04rem] xl:-tracking-[0.075rem] flex items-center justify-between"
        onClick={() => {}}
      >
        <span>
          Testimonials From Our <em className="text-primary">Satisfied</em>{" "}
          Patients
        </span>
      </Heading>
      <Carousel items={testimonialsData} numPerSlide={2}></Carousel>
    </section>
  );
};

export default TestimonialsSection;
