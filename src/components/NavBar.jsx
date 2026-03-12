import React from 'react'
import logo from '/images/logo.webp'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

    // NavLink Class
    const navLinkClass = ({ isActive }) => `${isActive ? 'text-red-800' : 'text-black'} hover:text-red-700 font-medium transition-all duration-300`

    return (
        <nav className='flex justify-between items-center px-4 mt-2 mx-5 md:py-2 md:px-10 md:mx-10 bg-white/90 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/10 rounded-2xl transition-all duration-300'>
            <div>
                <img src={logo} alt="logo" className='w-30 h-25 xl:w-40 xl:h-22 object-contain' />
            </div>
            <ul className='flex justify-center items-center md:gap-6 gap-2 text-lg'>
                <li>
                    <NavLink
                        to="/"
                        className={navLinkClass}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={navLinkClass}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/schedule"
                        className={navLinkClass}>
                        Schedule</NavLink></li>
                <li>
                    <NavLink
                        to="/gallery"
                        className={navLinkClass}>
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/location"
                        className={navLinkClass}>
                        Location
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={navLinkClass}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}