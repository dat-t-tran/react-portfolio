import React from 'react';
import { assets } from '../../assets/assets.config';
import { CarouselControlProps } from './CarouselControl.types';
import Button from '../Button';

const CarouselControl: React.FC<CarouselControlProps> = ({
  currentIndex,
  slidesToShow,
  prevSlide,
  nextSlide,
  setCurrentIndex,
  items,
}): JSX.Element => {
  return (
    <div className="w-full inline-flex justify-between items-center md:pt-10">
      {/* Left Arrow */}
      <Button
        className="p-2"
        id="prev"
        type="button"
        image={
          currentIndex === 0
            ? assets.global.arrowCircleLeftInactive
            : assets.global.arrowCircleLeft
        }
        onClick={prevSlide}
        disabled={currentIndex === 0}
      />

      {/* Indicators */}
      <div className="flex justify-center space-x-2">
        {Array.from({
          length: Math.ceil(items.length / slidesToShow),
        }).map((_, index) => (
          <Button
            id={'indicator' + index}
            type="button"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-primary' : 'bg-zinc-300'
            }`}
          />
        ))}
      </div>

      {/* Right Arrow */}
      <Button
        className="p-2"
        id="next"
        type="button"
        image={
          currentIndex === items.length - slidesToShow
            ? assets.global.arrowCircleRightInactive
            : assets.global.arrowCircleRight
        }
        onClick={nextSlide}
        disabled={currentIndex === items.length - slidesToShow}
      />
    </div>
  );
};

export default CarouselControl;
