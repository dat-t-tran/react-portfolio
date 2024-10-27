import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets.config';
import { MD_SCREEN_SIZE, NUMBER_OF_SLIDES } from '../../constants/common';
import ExpertiseCard from '../ExpertiseCard';
import CarouselControl from './CarouselControl';
import Button from '../Button';
import { CarouselProps } from './Carousel.types';

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleItems, setVisibleItems] = useState(NUMBER_OF_SLIDES);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MD_SCREEN_SIZE);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - NUMBER_OF_SLIDES ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - NUMBER_OF_SLIDES : prevIndex - 1
    );
  };

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  return (
    <div className="py-6 md:py-10 md:overflow-hidden">
      {isMobile ? (
        <>
          {items.slice(0, visibleItems).map((item, index) => (
            <div className="w-full mb-4" key={index}>
              <ExpertiseCard
                customClass={item.customClass}
                header={item.header}
                body={item.body}
                footer={item.footer}
              />
            </div>
          ))}
          {visibleItems < items.length && (
            <Button
              className="rounded-full text-primary font-medium text-base xl:text-xl w-full xl:w-auto py-3 xl:py-4 xl:px-12 border border-primary inline-flex justify-center items-center gap-2"
              id="see-more"
              type="button"
              image={assets.global.arrowRight}
              onClick={handleSeeMore}
            >
              See More
            </Button>
          )}
        </>
      ) : (
        <>
          <div
            className="flex gap-6 transition-transform ease-out duration-500"
            style={{
              transform: `translateX(-${(currentIndex / NUMBER_OF_SLIDES) * 100}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                className={`w-1/${NUMBER_OF_SLIDES} flex-shrink-0`}
                key={index}
              >
                <ExpertiseCard
                  customClass={item.customClass}
                  header={item.header}
                  body={item.body}
                  footer={item.footer}
                />
              </div>
            ))}
          </div>
          <CarouselControl
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            items={items}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
