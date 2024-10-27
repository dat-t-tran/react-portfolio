import { describe, it, expect } from 'vitest';
import { createImageSources } from './createImageSource';
import { ImageSource } from '../components/ImageResponsive/ImageResponsive.types';

describe('createImageSources', () => {
  it('should create image sources with correct types', () => {
    const mediaQueries = ['(max-width: 600px)', '(min-width: 601px)'];
    const imageUrls = ['image1.jpg', 'image2.png'];

    const expected: ImageSource[] = [
      {
        id: 1,
        srcSet: 'image1.jpg',
        media: '(max-width: 600px)',
        type: 'image/jpeg',
      },
      {
        id: 2,
        srcSet: 'image2.png',
        media: '(min-width: 601px)',
        type: 'image/png',
      },
    ];

    const result = createImageSources(mediaQueries, imageUrls);
    expect(result).toEqual(expected);
  });

  it('should throw an error if mediaQueries and imageUrls have different lengths', () => {
    const mediaQueries = ['(max-width: 600px)'];
    const imageUrls = ['image1.jpg', 'image2.png'];

    expect(() => createImageSources(mediaQueries, imageUrls)).toThrow(
      'mediaQueries and imageUrls must have the same length'
    );
  });

  it('should handle different image types correctly', () => {
    const mediaQueries = [
      '(max-width: 600px)',
      '(min-width: 601px)',
      '(min-width: 1000px)',
    ];
    const imageUrls = ['image1.svg', 'image2.webp', 'image3.jpeg'];

    const expected: ImageSource[] = [
      {
        id: 1,
        srcSet: 'image1.svg',
        media: '(max-width: 600px)',
        type: 'image/svg+xml',
      },
      {
        id: 2,
        srcSet: 'image2.webp',
        media: '(min-width: 601px)',
        type: 'image/webp',
      },
      {
        id: 3,
        srcSet: 'image3.jpeg',
        media: '(min-width: 1000px)',
        type: 'image/jpeg',
      },
    ];

    const result = createImageSources(mediaQueries, imageUrls);
    expect(result).toEqual(expected);
  });

  it('should default to "image/*" for unknown image types', () => {
    const mediaQueries = ['(max-width: 600px)'];
    const imageUrls = ['image1.unknown'];

    const expected: ImageSource = {
      id: 1,
      srcSet: 'image1.unknown',
      media: '(max-width: 600px)',
      type: 'image/*',
    };

    const result = createImageSources(mediaQueries, imageUrls);
    expect(result).toEqual([expected]);
  });
});
