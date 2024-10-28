import React, { useState, useCallback } from 'react';
import { assets } from '../../assets/assets.config';
import NavigationList from '../NavigationList/NavigationList';
import SideBar from '../SideBar/SideBar';

const Header: React.FC = React.memo((): JSX.Element => {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setMenuStatus((prevStatus) => !prevStatus);
  }, []);

  return (
    <header>
      <nav
        className="py-6 px-4 flex justify-between items-center border-b border-[#E4E4E4] md:border-none sm:py-8 sm:px-5"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-4">
          <img
            srcSet={`${assets.global.webpLogo} 480w, ${assets.global.webpSmLogo} 800w`}
            sizes="(max-width: 600px) 480px, 800px"
            src={assets.global.originLogo}
            alt="MedEase Logo"
            className="w-6 h-6 sm:w-8 sm:h-8"
            loading="lazy"
          ></img>
          <span className="text-xl text-primary font-semibold md:text-2xl">
            MedEase
          </span>
        </div>
        <ul className="hidden md:flex md:items-center md:gap-6 xl:gap-12">
          <NavigationList />
        </ul>
        <button
          className="rounded-[99px] bg-primary text-white font-medium text-sm lg:text-lg py-2 lg:py-3 px-16 h-14 hidden md:block md:h-11 lg:h-auto"
          id="create-account"
          type="button"
          aria-label="Create Account"
        >
          Register
        </button>
        {/* Mobile button */}
        <button
          className="block md:hidden cursor-pointer"
          type="button"
          aria-label="Mobile Menu"
          onClick={toggleMenu}
        >
          <img
            src={assets.global.list}
            alt="List"
            width={24}
            height={24}
            loading="lazy"
          ></img>
        </button>
      </nav>
      <SideBar menuStatus={menuStatus} toggleMenu={toggleMenu} />
    </header>
  );
});

export default Header;
