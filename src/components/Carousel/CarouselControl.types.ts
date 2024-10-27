export interface CarouselControlProps {
  currentIndex: number;
  items: any[];
  nextSlide: () => void;
  prevSlide: () => void;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
