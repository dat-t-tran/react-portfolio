import React, { useCallback } from 'react';
import { assets } from '../../assets/assets.config';
import NavigationList from '../NavigationList';
import { SideBarProps } from './SideBar.types';

const SideBar: React.FC<SideBarProps> = React.memo(
  ({ menuStatus, toggleMenu }) => {
    const handleToggleMenu = useCallback(() => {
      toggleMenu();
    }, [toggleMenu]);

    return (
      <aside
        id="mobileNav"
        className={`${menuStatus ? 'w-full' : 'w-0'} h-full z-10 fixed top-0 left-0 overflow-x-hidden`}
      >
        <div className="w-full h-full bg-slate-300/50 relative"></div>
        <ul className="rounded-2xl bg-white w-4/5 absolute top-10 ms-auto me-auto right-0 left-0 p-4">
          <button
            className="cursor-pointer float-right"
            type="button"
            aria-label="Close Menu"
            onClick={handleToggleMenu}
          >
            <img
              src={assets.global.close}
              alt="Close"
              width={24}
              height={24}
              loading="lazy"
            />
          </button>
          <NavigationList />
        </ul>
      </aside>
    );
  }
);

export default SideBar;
