import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar=drak bg-dark py-2'>
            <Link to='/ss' className='navbar-brand ml-5'>React Redux Contact App</Link>
            <ul className='navbar-nab'>
                <li className='nav-item'>
                <Link to='/' className='navbar-brand ml-5'></Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;