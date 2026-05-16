import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        `font-medium transition-all duration-300 ${isActive ? 'text-primary bg-primary/10' : 'hover:text-primary'}`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/register" 
                    className={({ isActive }) => 
                        `font-medium transition-all duration-300 ${isActive ? 'text-primary bg-primary/10' : 'hover:text-primary'}`
                    }
                >
                    Register
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/installation" 
                    className={({ isActive }) => 
                        `font-medium transition-all duration-300 ${isActive ? 'text-primary bg-primary/10' : 'hover:text-primary'}`
                    }
                >
                    Installation
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-100 px-4 lg:px-12 transition-all">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-slate-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-xl w-52 border border-slate-50">
                        {navLinks}
                    </ul>
                </div>
                <a className="text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent cursor-pointer">
                    Authentication
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                <NavLink to="/login">
                    <button className="btn btn-primary btn-sm px-6 rounded-full font-semibold shadow-md shadow-primary/20 hover:shadow-lg transition-all border-none">
                        Login
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;