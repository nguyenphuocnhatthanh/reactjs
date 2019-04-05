import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavigation = () => (
    <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
        <li>
            <NavLink to="/foo">Foo</NavLink>
        </li>
        <li>
            <NavLink to="/foo/bar">Bar</NavLink>
        </li>
    </ul>
)

export default HeaderNavigation