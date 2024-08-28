import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import AdminPanel from "./AdminPanel";

function LogAdmin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('user'); // Default to 'user'
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    const isAdmin = accountType === 'admin';
    setUser({ name: username, isAdmin });
  };

  return (
    <div className="container mt-5">
      {user ? (
        <AdminPanel user={user} />
      ) : (
        <div className="card shadow-sm p-4">
          <h1 className="h4 mb-4 text-center">Login</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Username:</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Account Type:</label>
              <select
                className="form-select"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="d-grid">
              <button type="button" className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default LogAdmin;
