import { useState } from "react";
import { assets } from "../assets/assets.config";
import { NavLink } from "react-router-dom";

interface NavigationProps {
    name: string;
    href: string;
}

const navigation: NavigationProps[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/doctors" },
    { name: "Find a Doctor", href: "/doctors" },
    { name: "About Us", href: "/about" },
];

export default function Header() {
    // const [token, setToken] = useState<boolean>(true);
    const [menuStatus, setStatus] = useState<boolean>(false);

    return (
        <header>
            <nav className="py-6 px-4 flex justify-between items-center border-b border-[#E4E4E4] md:border-none sm:py-8 sm:px-5" aria-label="Main navigation">
                <div className="flex items-center gap-4">
                    <img srcSet={`${assets.webpLogo} 480w, ${assets.webpSmLogo} 800w`} sizes="(max-width: 600px) 480px, 800px" src={assets.originLogo} alt="MedEase Logo" className="w-6 h-6 sm:w-8 sm:h-8"></img>
                    <span className="text-xl text-primary font-semibold md:text-2xl">MedEase</span>
                </div>
                <ul className="hidden md:flex md:items-center md:gap-6 lg:gap-12">
                    {navigation.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.href} className={({ isActive }) =>
                                "font-normal text-sm lg:text-xl truncate" + (!isActive ? " text-secondary" : "  text-primary")
                            }>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
                <button className="rounded-[99px] bg-primary text-white font-medium text-sm lg:text-lg py-2 lg:py-3 px-16 h-14 hidden md:block md:h-11 lg:h-auto" id="create-account" type="button" aria-label="Create Account">
                    Register
                </button>
                {/* Mobile button */}
                <button className="block md:hidden cursor-pointer" type="button" aria-label="Mobile Menu" onClick={() => setStatus(!menuStatus)}>
                    <img src={assets.list} alt="List" width={24} height={24}></img>
                </button>
            </nav>
            <aside id="mobileNav" className={`${menuStatus ? "w-full" : "w-0"} h-full z-10 fixed top-0 left-0 overflow-x-hidden transition ease-in-out delay-1000`}>
                <div className="w-full h-full bg-slate-300/50 relative"></div>
                <ul className="rounded-2xl bg-white w-4/5 absolute top-10 ms-auto me-auto right-0 left-0 p-4">
                    <button className="cursor-pointer float-right" type="button" aria-label="Mobile Menu" onClick={() => setStatus(!menuStatus)}>
                        <img src={assets.close} alt="Close" width={24} height={24}></img>
                    </button>
                    {navigation.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.href} className={({ isActive }) =>
                                "font-normal text-sm lg:text-xl truncate transition delay-300 block p-2" + (!isActive ? " text-secondary" : "  text-primary")
                            }>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        </header>
    );
}
