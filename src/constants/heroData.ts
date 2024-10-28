import { assets } from '../assets/assets.config';
import { User } from '../components/HeroSection/HeroSection.types';
import { ImageSource } from '../components/ImageResponsive/ImageResponsive.types';

export const listUsers: User[] = [
  { id: 1, image: assets.hero.eclipseFourteen },
  { id: 2, image: assets.hero.eclipseFifthteen },
  { id: 3, image: assets.hero.eclipseSixteen },
  { id: 4, image: assets.hero.eclipseSeventeen },
];

export const sourcesHero: ImageSource[] = [
  {
    id: 1,
    srcSet: assets.hero.webpHeroLg,
    media: '(min-width: 800px)',
    type: 'image/webp',
  },
  {
    id: 2,
    srcSet: assets.hero.webpHeroSm,
    media: '(min-width: 600px)',
    type: 'image/webp',
  },
  {
    id: 3,
    srcSet: assets.hero.webpHero,
    media: '(min-width: 400px)',
    type: 'image/webp',
  },
];
