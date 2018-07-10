import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Menu = () => {
    return (
        <div className>
            <ul className="nav">
                <li className="navItem"><Link to="/">Home</Link></li>
                <li className="navItem"><Link to="/posts">Posts</Link></li>
                <li className="navItem"><Link to="/posts/new">Create</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;