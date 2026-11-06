import { useState } from "react";
import { useNavigate } from "react-router";

function Login ({ onLogin }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    if (!username.trim()) {
      alert("Username nggak boleh kosong!");
      return;
    }

    onLogin();
    navigate("/dashboard")
  }

  return (
    <div>
      <h1>Halaman Login</h1>
      <p>Silakan masukkan username untuk login.</p>

      <form onSubmit={handleLogin}>
        <input 
        type="text"
        placeholder="Masukan username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;