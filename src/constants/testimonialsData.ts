import { createExpertiseSources } from "../utils";
import { assets } from "../assets/assets.config";
import { CardList } from "../components/ExpertiseSection/ExpertiseSection.types";

const mediaQueries = ["(min-width: 800px)", "(min-width: 600px)"];
const testimonialsClass =
  "md:inline-flex md:justify-start md:items-start md:gap-2";
const testimonialsHeaderClass =
  "w-full xs:w-[19.875rem] rounded-3xl bg-primary object-cover";
const testimonialsWrapperClass = "mb-2";

const testimonialsSources = {
  david: createExpertiseSources(
    [assets.testimonials.davidLg, assets.testimonials.david],
    mediaQueries
  ),
  ester: createExpertiseSources(
    [assets.testimonials.esterLg, assets.testimonials.ester],
    mediaQueries
  ),
};

export const testimonialsData: CardList[] = [
  {
    id: 1,
    customClass: testimonialsClass,
    header: {
      type: "image",
      sources: testimonialsSources.david,
      originSrc: assets.testimonials.davidLg,
      alt: "David Panjaitan",
      className: testimonialsHeaderClass,
      wrapperClass: testimonialsWrapperClass,
      lazyLoad: true,
    },
    body: {
      className: "",
      title: "",
      description: `
      <div class="flex flex-col md:gap-10 gap-6 md:py-10 py-6 md:px-6 px-4 md:rounded-[1.25rem] rounded-2xl bg-[#F5F5F5]">
        <div class="text-[#111] font-medium text-xl md:min-h-[10.75rem] md:text-2xl leading-8 md:leading-[2.7rem] md:-tracking-[0.03rem] -tracking-[0.025rem]">
          "I've been using this site for a few months, and it's incredibly
          reliable. I appreciate the convenience of booking and canceling
          appointments anytime, anywhere”
        </div>
        <div>
          <div class="text-primary font-medium text-xl md:text-2xl leading-[1.875rem] md:leading-9 -tracking-[0.025rem] md:-tracking-[0.03rem]">
            David Panjaitan
          </div>
          <div class="text-secondary font-normal text-lg leading-[2.025rem] -tracking-[0.0225rem]">
            Software Engineer
          </div>
        </div>
      </div>`,
    },
    footer: {
      visible: false,
      name: "Book Consultation",
    },
  },
  {
    id: 2,
    customClass: testimonialsClass,
    header: {
      type: "image",
      sources: testimonialsSources.ester,
      originSrc: assets.testimonials.esterLg,
      alt: "Ester Howard",
      className: testimonialsHeaderClass,
      wrapperClass: testimonialsWrapperClass,
      lazyLoad: false,
    },
    body: {
      title: "",
      description: `
      <div class="flex flex-col md:gap-10 gap-6 md:py-10 py-6 md:px-6 px-4 md:rounded-[1.25rem] rounded-2xl bg-[#F5F5F5]">
        <div class="text-[#111] font-medium text-xl md:text-2xl md:min-h-[10.75rem] leading-8 md:leading-[2.7rem] md:-tracking-[0.03rem] -tracking-[0.025rem]">
          "Managing appointments for my entire family used to be chaotic. This site makes it so much easier to keep track of everyone’s schedules in one place."
        </div>
        <div>
          <div class="text-primary font-medium text-xl md:text-2xl leading-[1.875rem] md:leading-9 -tracking-[0.025rem] md:-tracking-[0.03rem]">
            Ester Howard
          </div>
          <div class="text-secondary font-normal text-lg leading-[2.025rem] -tracking-[0.0225rem]">
            Project Manager
          </div>
        </div>
      </div>`,
    },
    footer: {
      visible: false,
    },
  },
];
