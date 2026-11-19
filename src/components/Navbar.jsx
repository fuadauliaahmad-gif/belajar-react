import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-logo">
            FUAD-DEV.ID
            </NavLink>

            <ul className=" navbar-menu">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/about">About</NavLink>
                </li>

                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;