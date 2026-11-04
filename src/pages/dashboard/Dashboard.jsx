import { NavLink, Outlet } from "react-router";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Selamat datang di halaman dashboard.</p>

      <nav>
        <NavLink to="/dashboard/profile">Profil</NavLink>
        {" | "}
        <NavLink to="/dashboard/setting">Pengaturan</NavLink>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Dashboard;
