import { NavLink, useNavigate } from "react-router";

function Navbar({ isAuthenticated, onLogout, user }) {
  const navigate = useNavigate();

  function handleNavbarLogout() {
    if (onLogout) {
      onLogout();
    }
    navigate("/login", { replace: true });
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        FUAD-DEV<span style={{ color: "#ef4444" }}>.ID</span>
      </NavLink>

      <ul className="navbar-menu">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "menu-aktif" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "menu-aktif" : "")}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "menu-aktif" : "")}
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/form-pengguna"
            className={({ isActive }) => (isActive ? "menu-aktif" : "")}
          >
            Form
          </NavLink>
        </li>

        {isAuthenticated ? (
          <>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "menu-aktif" : "")}
              >
                Dashboard
              </NavLink>
            </li>

            <li className="navbar-user-info">
              <span className="navbar-user-badge">
                👤 {user?.username || "Admin"}
              </span>
            </li>

            <li>
              <button
                onClick={handleNavbarLogout}
                className="tombol-navbar-logout"
                title="Keluar dari akun"
              >
                Logout 🚪
              </button>
            </li>
          </>
        ) : (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "tombol-navbar-login aktif" : "tombol-navbar-login"
              }
            >
              Login 🔐
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
