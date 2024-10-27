import { describe, it, expect } from 'vitest';
import { listUsers, sources } from './HeroSection.types';
import { assets } from '../../assets/assets.config';
import { ImageType } from '../ImageResponsive/ImageResponsive.types';

describe('listUsers', () => {
  it('should have 4 users', () => {
    expect(listUsers).toHaveLength(4);
  });

  it('should have correct user ids and images', () => {
    const expectedUsers = [
      { id: 1, image: assets.hero.eclipseFourteen },
      { id: 2, image: assets.hero.eclipseFifthteen },
      { id: 3, image: assets.hero.eclipseSixteen },
      { id: 4, image: assets.hero.eclipseSeventeen },
    ];

    expect(listUsers).toEqual(expectedUsers);
  });

  it('each user should have an id and image', () => {
    listUsers.forEach((user) => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('image');
    });
  });
});

describe('Hero Banner Image', () => {
  it('should have 3 image sources', () => {
    expect(sources).toHaveLength(3);
  });

  it('should have the correct structure', () => {
    sources.forEach((item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('srcSet');
      expect(item).toHaveProperty('media');
      expect(item).toHaveProperty('type');
    });
  });

  it('should have the correct type for each source', () => {
    const validTypes: ImageType[] = ['image/webp', 'image/jpeg', 'image/png'];

    sources.forEach((source) => {
      expect(validTypes).toContain(source.type);
    });
  });
});
