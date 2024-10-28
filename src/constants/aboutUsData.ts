import { assets } from '../assets/assets.config';
import { ImageSource } from '../components/ImageResponsive/ImageResponsive.types';

export const sourcesAboutUs: ImageSource[] = [
  {
    id: 1,
    srcSet: assets.aboutUs.webpAboutUsLg,
    media: '(min-width: 800px)',
    type: 'image/webp',
  },
  {
    id: 2,
    srcSet: assets.aboutUs.webpAboutUs,
    media: '(min-width: 600px)',
    type: 'image/webp',
  },
];
