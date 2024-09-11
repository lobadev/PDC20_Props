import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';
import './App.css'; 
import logo from './logo.svg';
import Registration from './Registration';
import LogAdmin from "./Dashboard/LogAdmin";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AuthError from './Dashboard/AuthError';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogAdmin/>}/>
                <Route path="/auth-error" element={<AuthError/>}/>
            </Routes>
        </Router>
    );
}

export default App;
