import originLogo from "./global/stethoscope-32x32.svg";
import webpSmLogo from "./global/stethoscope-32x32.webp";
import webpLogo from "./global/stethoscope-24x24.webp";
import star from "./global/star-16x16.svg";
import starSm from "./global/star-24x25.svg";
import list from "./global/list-icon.svg";
import arrowRight from "./global/arrow-right.svg";
import originHero from "./components/hero-section/pexels-karolina-grabowska-2731x4069.jpeg";
import hero from "./components/hero-section/pexels-karolina-grabowska-311x282.png";
import heroSm from "./components/hero-section/pexels-karolina-grabowska-550x500.png";
import webpHeroLg from "./components/hero-section/pexels-karolina-grabowska-2731x4069.webp";
import webpHero from "./components/hero-section/pexels-karolina-grabowska-311x282.webp";
import webpHeroSm from "./components/hero-section/pexels-karolina-grabowska-550x500.webp";
import close from "./global/close.svg";
import eclipse from "./components/hero-section/ellipse.svg";
import eclipseFourteen from "./components/hero-section/ellipse-14-40x40.svg";
import eclipseFifthteen from "./components/hero-section/ellipse-15-40x40.svg";
import eclipseSixteen from "./components/hero-section/ellipse-16-40x40.svg";
import eclipseSeventeen from "./components/hero-section/ellipse-17-40x40.svg";

interface User {
  id: number;
  image: string;
}

export const assets = {
  originLogo,
  webpSmLogo,
  webpLogo,
  star,
  starSm,
  list,
  arrowRight,
  originHero,
  hero,
  heroSm,
  webpHeroLg,
  webpHero,
  webpHeroSm,
  close,
  eclipse,
  eclipseFourteen,
  eclipseFifthteen,
  eclipseSixteen,
  eclipseSeventeen,
};

export const listUsers: User[] = [
  { id: 1, image: assets.eclipseFourteen },
  { id: 2, image: assets.eclipseFifthteen },
  { id: 3, image: assets.eclipseSixteen },
  { id: 4, image: assets.eclipseSeventeen },
];
