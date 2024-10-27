import React from 'react';
import { assets } from '../../assets/assets.config';
import { classNames } from '../../utils/classNames';
import { BadgeProps, badgeImageSource } from './Badge.types';
import ImageResponsive from '../ImageResponsive';

/**
 * Renders a responsive star icon with a description inside a styled container.
 * The component accepts a description string and an optional custom class for additional styling.
 *
 * @param {Object} props - The component props.
 * @param {string} props.description - The text description to display.
 * @param {string} [props.customClass=""] - Optional additional CSS classes for styling.
 * @returns {JSX.Element} The rendered component.
 * @throws {Error} Throws an error if the description is not provided.
 */
const Badge: React.FC<BadgeProps> = ({
  description,
  customClass = '',
}: {
  description: string;
  customClass?: string;
}): JSX.Element => {
  return (
    <div
      className={classNames(
        'flex py-[0.625rem] px-4 md:px-6 items-stretch md:items-center gap-2 md:gap-4 rounded-[6.1875rem] bg-[#F2F7FF] w-fit',
        customClass
      )}
    >
      <ImageResponsive
        sources={badgeImageSource}
        originSrc={assets.global.starSm}
        alt="Star"
        className="w-4 md:w-6"
        lazyLoad={false}
      />
      <span className="text-primary text-xs md:text-xl">{description}</span>
    </div>
  );
};

export default Badge;
