import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets.config";
import {
  MD_SCREEN_SIZE,
  NUMBER_PER_SLIDE,
  XL_SCREEN_SIZE,
} from "../../constants";
import Card from "../Card";
import CarouselControl from "./CarouselControl";
import Button from "../Button";
import { CarouselProps } from "./Carousel.types";

const Carousel: React.FC<CarouselProps> = ({
  items,
  numPerSlide = NUMBER_PER_SLIDE,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [visibleItems, setVisibleItems] = useState(numPerSlide);
  const [slidesToShow, setSlidesToShow] = useState(numPerSlide);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MD_SCREEN_SIZE);
      setSlidesToShow(
        window.innerWidth > MD_SCREEN_SIZE && window.innerWidth < XL_SCREEN_SIZE
          ? numPerSlide - 1
          : numPerSlide
      );
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - numPerSlide ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - numPerSlide : prevIndex - 1
    );
  };

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + numPerSlide);
  };

  return (
    <div className="w-full py-6 md:py-10 md:overflow-hidden">
      {isMobile ? (
        <>
          {items.slice(0, visibleItems).map((item, index) => (
            <div className="w-full md:max-w-[26.5rem] mb-4" key={index}>
              <Card
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
            className="flex transition-transform ease-out duration-500 -mx-6"
            style={{
              transform: `translateX(-${(currentIndex / slidesToShow) * 100}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                className={`w-1/${slidesToShow} flex-shrink-0 px-6 py-12`}
                key={index}
              >
                <Card
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
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            slidesToShow={slidesToShow}
            items={items}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
