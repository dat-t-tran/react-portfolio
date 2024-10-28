import React from 'react'
import { NavLink } from "react-router-dom";
import { navigation } from "./NavigationList.types";

const NavigationList = React.memo((): JSX.Element => (
    <>
        {navigation.map((item) => (
            <li key={item.id}>
                <NavLink to={item.href} className={({ isActive }) =>
                    "font-normal text-sm lg:text-xl truncate" + (!isActive ? " text-secondary" : "  text-primary")
                }>{item.name}</NavLink>
            </li>
        ))}
    </>
));

export default NavigationList