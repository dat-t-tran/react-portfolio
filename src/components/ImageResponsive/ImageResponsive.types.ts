export type ImageType =
  | 'image/webp'
  | 'image/jpeg'
  | 'image/png'
  | 'image/jpg'
  | 'image/gif'
  | 'image/svg+xml'
  | 'image/avif'
  | 'image/*';

export interface ImageSource {
  id: number;
  srcSet: string;
  media: string;
  type: ImageType;
}

export interface ImageResponsiveProps {
  sources: ImageSource[];
  originSrc: string;
  alt: string;
  className?: string;
  lazyLoad?: boolean;
}
