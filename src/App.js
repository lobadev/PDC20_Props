import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';
import './App.css'; 
import logo from './logo.svg';

function Parent() {
    return (
        <div className="app-container">
            <section className='parent'>
            <img src={logo} className="App-logo" alt="logo" />
                <h1>Welcome to My First React Page</h1>
                <h6>My name is Don Henessy S. David</h6>
            </section>
            <div className="children-container">
                <Child1 />
                <Child2 />
                <Child3 />
            </div>
        </div>
    );
}

export default Parent;
