import React from "react";
import { useState } from 'react';
import AdminPanel from "./AdminPanel";

function LogAdmin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        const isAdmin = accountType === 'admin';
        setUser({name: username, isAdmin});
    }
    return (
        <div>
            {user?(
                <AdminPanel user={user}/>
            ):(<div>
                <h1>Login</h1>
                <div>
                    <label>Username:</label>
                    <input
                    text="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                    text="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <label>Account Type:</label>
                    <select
                    text="text"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button onClick={handleLogin}>Login</button>

                </div>)}
        </div>
    );
}

export default LogAdmin;