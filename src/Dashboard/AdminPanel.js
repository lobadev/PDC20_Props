import React from "react";

function AdminPanel({user}){
   return (
    <div>
        {user.isAdmin?(
            <div>
                <h1>Admin Dashboard</h1>
                <p>Welcome, {user.name}! You have admin privileges.</p>
                <button>Manage Users</button>
                <button>View Reports</button>
            </div>):(
                <div>
                <h1>Guest Dashboard</h1>
                <p>Welcome, {user.name}! You are not an admin.</p>
                <button>View Profile</button>
                <button>Settings</button>
                </div>)}
    </div>

   ); 
}

export default AdminPanel;