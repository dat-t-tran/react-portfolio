import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Badge from './Badge';
import { assets } from '../../assets/assets.config';

describe('Badge', () => {
  it('renders the badge with the correct description', () => {
    const description = 'Test Badge';
    const { getByText } = render(<Badge description={description} />);
    const descriptionElement = getByText(description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('applies custom class to the badge', () => {
    const customClass = 'test-class';
    const { container } = render(
      <Badge description="Test Badge" customClass={customClass} />
    );
    const badgeElement = container.firstChild;
    expect(badgeElement).toHaveClass(customClass);
  });

  it('renders the correct star icon based on screen size', () => {
    const { container } = render(<Badge description="Test Badge" />);
    const pictureElement = container.querySelector('picture');
    if (pictureElement) {
      const sourceElements = pictureElement.querySelectorAll('source');
      const imgElement = pictureElement.querySelector('img');

      expect(sourceElements[0]).toHaveAttribute('srcSet', assets.global.starSm);
      expect(sourceElements[0]).toHaveAttribute('media', '(min-width: 800px)');
      expect(sourceElements[0]).toHaveAttribute('type', 'image/svg+xml');

      expect(sourceElements[1]).toHaveAttribute('srcSet', assets.global.star);
      expect(sourceElements[1]).toHaveAttribute('media', '(min-width: 600px)');
      expect(sourceElements[1]).toHaveAttribute('type', 'image/svg+xml');

      expect(imgElement).toHaveAttribute('src', assets.global.starSm);
      expect(imgElement).toHaveAttribute('alt', 'Star');
      expect(imgElement).toHaveClass('w-4');
      expect(imgElement).not.toHaveClass('w-6');
    }
  });
});
