import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <p>This is home page</p>
            <Link to="/about">About</Link> 
        </div>
    )
}