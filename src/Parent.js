import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

function Parent(){
    return(
        <div>
            <section className='parent'>
            <h1>Welcome to my First React Page</h1>
            <h6>My name is Don Henessy S. David</h6>
            </section>
            <Child1 />
            <Child2 />
            <Child3 />
        </div>
    );
}

export default Parent;