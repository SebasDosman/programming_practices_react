import React from 'react';

import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light rounded-3'>
            <div className="container-fluid">
                <Link to='/' className='navbar-brand'>Home</Link>

                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                        <NavLink to='/counter-app' className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Counter App</NavLink>
                        <NavLink to='/counter-custom-hooks' className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Counter Custom Hooks</NavLink>
                        <NavLink to='/simple-form' className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Simple Form</NavLink>
                        <NavLink to='/form-custom-hook' className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Form Custom Hook</NavLink>
                        <NavLink to='/multiple-custom-hooks' className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Multiple Custom Hooks</NavLink>
                        <NavLink to='/focus-screen' className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Focus Screen</NavLink>    
                        <NavLink to='/layout' className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Layout</NavLink>
                        <NavLink to='/memorize' className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Memorize</NavLink>
                        <NavLink to='/memo-hook' className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Memo Hook</NavLink>
                        <NavLink to='/callback-hook' className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Callback Hook</NavLink>
                        <NavLink to='/padre' className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Padre</NavLink>
                    </ul>
                </div>
            </div>
        </nav >
    )
};

export default NavBar;
