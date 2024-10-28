export interface CarouselControlProps {
  currentIndex: number;
  items: any[];
  slidesToShow: number;
  nextSlide: () => void;
  prevSlide: () => void;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
