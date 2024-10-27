import { assets } from '../../assets/assets.config';
import { ImageSource } from '../ImageResponsive/ImageResponsive.types';

export interface BadgeProps {
  description: string;
  customClass?: string;
}

export const badgeImageSource: ImageSource[] = [
  {
    id: 1,
    srcSet: assets.global.starSm,
    media: '(min-width: 800px)',
    type: 'image/svg+xml',
  },
  {
    id: 2,
    srcSet: assets.global.star,
    media: '(min-width: 600px)',
    type: 'image/svg+xml',
  },
];
