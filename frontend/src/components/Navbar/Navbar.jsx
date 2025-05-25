import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ closeMenu }) => {
    const handleLinkClick = () => {
        if (closeMenu) closeMenu();
    };

    return (
        <nav className="h-full w-full bg-white overflow-y-auto pb-20">
            <div className="flex justify-between items-center p-4 sm:hidden">
                <h2 className="font-bold text-gray-800">Menu</h2>
                <button
                    onClick={closeMenu}
                    className="p-2 rounded-full hover:bg-gray-100"
                >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <ul className="space-y-1 p-3">
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        Home
                    </NavLink>
                </li>
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        About
                    </NavLink>
                </li>
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="/academics"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        Academics
                    </NavLink>
                </li>
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="/admissions"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        Admissions
                    </NavLink>
                </li>
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="/join-as-faculty"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        Join As Faculty
                    </NavLink>
                </li>
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="/people"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        People
                    </NavLink>
                </li>
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="/research"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        Research
                    </NavLink>
                </li>
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;