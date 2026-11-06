import { NavLink, Outlet, useNavigate } from "react-router";

function Dashboard({ onLogut }) {
  const navigate = useNavigate();

  function handleLogout() {
    onLogut();
    navigate("/login", { replace: true});
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome di halaman dashboard</p>

      <nav>
        <NavLink to="/dashboard/profile">Profil</NavLink>
        {" | "}
        <NavLink to="/dashboard/setting">Pengaturan</NavLink>
      </nav>

      <hr />

      <Outlet />

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;