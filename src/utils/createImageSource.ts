import {
  ImageSource,
  ImageType,
} from '../components/ImageResponsive/ImageResponsive.types';

const getImageType = (src: string): ImageType => {
  const extension = src.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'svg':
      return 'image/svg+xml';
    case 'webp':
      return 'image/webp';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    default:
      return 'image/*';
  }
};

export const createImageSources = (
  mediaQueries: string[],
  imageUrls: string[]
): ImageSource[] => {
  if (mediaQueries.length !== imageUrls.length) {
    throw new Error('mediaQueries and imageUrls must have the same length');
  }

  return mediaQueries.map((media, index) => ({
    id: index + 1,
    srcSet: imageUrls[index],
    media: media,
    type: getImageType(imageUrls[index]),
  }));
};

export const createExpertiseSources = (
  urls: string[],
  mediaQueries: string[]
): ImageSource[] => createImageSources(mediaQueries, urls);
