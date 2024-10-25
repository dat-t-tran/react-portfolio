// import { useState } from "react";
// import { assets } from "../styles/assets";
// import { NavLink, useNavigate } from "react-router-dom";

// type MenuLabel = "HOME" | "ALL DOCTORS" | "ABOUT" | "CONTACT";
// interface MenuList {
//     label: MenuLabel;
//     liClassName: string;
//     hrClassName: string;
//     to: string;
// }

// interface DropdownMenu {
//     label: string;
//     className: string;
//     onClick: () => void;
// }

// const Navbar: React.FC = () => {
//     const menuList: MenuList[] = [
//         {
//             label: "HOME",
//             liClassName: "py-1",
//             hrClassName:
//                 "border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden",
//             to: "/",
//         },
//         {
//             label: "ALL DOCTORS",
//             liClassName: "py-1",
//             hrClassName:
//                 "border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden",
//             to: "/doctors",
//         },
//         {
//             label: "ABOUT",
//             liClassName: "py-1",
//             hrClassName:
//                 "border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden",
//             to: "/about",
//         },
//         {
//             label: "CONTACT",
//             liClassName: "py-1",
//             hrClassName:
//                 "border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden",
//             to: "/contact",
//         },
//     ];

//     const dropdownMenu: DropdownMenu[] = [
//         {
//             label: "My Profile",
//             className: "hover:text-black cursor-pointer",
//             onClick: () => navigate("my-profile"),
//         },
//         {
//             label: "My Appointments",
//             className: "hover:text-black cursor-pointer",
//             onClick: () => navigate("my-appointment"),
//         },
//         {
//             label: "Logout",
//             className: "hover:text-black cursor-pointer",
//             onClick: () => setToken(false),
//         },
//     ];

//     const navigate = useNavigate();
//     // const [showMenu, setShowMenu] = useState<boolean>(false);
//     const [token, setToken] = useState<boolean>(true);

//     return (
//         <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
//             <img className="w-44 cursor-pointer" src={assets.logo} alt="logo"></img>
//             <ul className="hidden md:flex items-start gap-5 font-medium">
//                 {menuList.map((item, index) => (
//                     <NavLink key={index} to={item.to}>
//                         <li className={item.liClassName}>{item.label}</li>
//                         <hr className={item.hrClassName}></hr>
//                     </NavLink>
//                 ))}
//             </ul>
//             <div className="flex items-center gap-4">
//                 {token ? (
//                     <div className="flex items-center gap-2 cursor-pointer group relative">
//                         <img
//                             className="w-8 rounded-full"
//                             src={assets.profile_pic}
//                             alt="profile picture"
//                         ></img>
//                         <img
//                             className="w-2.5"
//                             src={assets.dropdown_icon}
//                             alt="dropdown icon"
//                         ></img>
//                         <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//                             <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
//                                 {dropdownMenu.map((item, index) => (
//                                     <p
//                                         key={index}
//                                         className={item.className}
//                                         onClick={item.onClick}
//                                     >
//                                         {item.label}
//                                     </p>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <button
//                         onClick={() => navigate("/login")}
//                         className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
//                     >
//                         Create account
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;
