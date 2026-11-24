import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-logo">
            FUAD-DEV.ID
            </NavLink>

            <ul className=" navbar-menu">
                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "menu-aktif" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "menu-aktif" : ""
                        }
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "menu-aktif" : ""
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;