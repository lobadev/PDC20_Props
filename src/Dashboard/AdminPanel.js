import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminPanel({ user }) {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          {user.isAdmin ? (
            <div>
              <h1 className="h4 mb-3 text-primary">Admin Dashboard</h1>
              <p className="mb-4">Welcome, {user.name}! You have admin privileges.</p>
              <button className="btn btn-primary me-2">Manage Users</button>
              <button className="btn btn-secondary">View Reports</button>
            </div>
          ) : (
            <div>
              <h1 className="h4 mb-3 text-secondary">Guest Dashboard</h1>
              <p className="mb-4">Welcome, {user.name}! You are not an admin.</p>
              <button className="btn btn-primary me-2">View Profile</button>
              <button className="btn btn-secondary">Settings</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
