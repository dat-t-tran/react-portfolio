import { createExpertiseSources } from '../utils';
import { assets } from '../assets/assets.config';
import { CardList } from '../components/ExpertiseSection/ExpertiseSection.types';

const mediaQueries = ['(min-width: 800px)', '(min-width: 600px)'];
const expertiesClass =
  'h-80 w-full md:w-96 md:h-96 px-6 py-12 bg-neutral-100 rounded-2xl flex-col justify-start items-start gap-6 inline-flex self-stretch';
const expertiesHeaderClass = 'w-8 md:w-10 h-8 md:h-10';
const expertiesWrapperClass =
  'h-12 md:h-14 p-2 bg-neutral-200 rounded-full justify-start items-start gap-2.5 inline-flex';

const expertiseSources = {
  cardiologist: createExpertiseSources(
    [assets.expertise.heartSm, assets.expertise.heart],
    mediaQueries
  ),
  neurologist: createExpertiseSources(
    [assets.expertise.brainSm, assets.expertise.brain],
    mediaQueries
  ),
  entSpecialist: createExpertiseSources(
    [assets.expertise.earSm, assets.expertise.ear],
    mediaQueries
  ),
  pediatrician: createExpertiseSources(
    [assets.expertise.babySm, assets.expertise.baby],
    mediaQueries
  ),
};

export const expertiesData: CardList[] = [
  {
    id: 1,
    customClass: expertiesClass,
    header: {
      type: 'icon',
      sources: expertiseSources.cardiologist,
      originSrc: assets.expertise.heartSm,
      alt: 'Cardiologist',
      className: expertiesHeaderClass,
      wrapperClass: expertiesWrapperClass,
      lazyLoad: false,
    },
    body: {
      title: 'Cardiologist',
      description:
        'Heart specialist focusing on cardiovascular health and diseases.',
    },
    footer: {
      visible: true,
      name: 'Book Consultation',
    },
  },
  {
    id: 2,
    customClass: expertiesClass,
    header: {
      type: 'icon',
      sources: expertiseSources.neurologist,
      originSrc: assets.expertise.brainSm,
      alt: 'Neurologist',
      className: expertiesHeaderClass,
      wrapperClass: expertiesWrapperClass,
      lazyLoad: false,
    },
    body: {
      title: 'Neurologist',
      description:
        'Doctor specializing in diagnosing and treating nervous system disorders.',
    },
    footer: {
      visible: true,
      name: 'Book Consultation',
    },
  },
  {
    id: 3,
    customClass: expertiesClass,
    header: {
      type: 'icon',
      sources: expertiseSources.entSpecialist,
      originSrc: assets.expertise.earSm,
      alt: 'ENT Specialist',
      className: expertiesHeaderClass,
      wrapperClass: expertiesWrapperClass,
      lazyLoad: false,
    },
    body: {
      title: 'ENT Specialist',
      description:
        'Doctor specializing in ear, nose, and throat disorders and surgeries.',
    },
    footer: {
      visible: true,
      name: 'Book Consultation',
    },
  },
  {
    id: 4,
    customClass: expertiesClass,
    header: {
      type: 'icon',
      sources: expertiseSources.pediatrician,
      originSrc: assets.expertise.babySm,
      alt: 'Pediatrician',
      className: expertiesHeaderClass,
      wrapperClass: expertiesWrapperClass,
      lazyLoad: false,
    },
    body: {
      title: 'Pediatrician',
      description: `Specializing in children's healthcare, from infancy to adolescence.`,
    },
    footer: {
      visible: true,
      name: 'Book Consultation',
    },
  },
];
