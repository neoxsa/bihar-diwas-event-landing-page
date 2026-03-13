import React from 'react'

export default function NavBar() {

    return (
        <nav className='flex justify-between items-center px-4 py-5 md:px-10 bg-[#701e11] backdrop-blur-xl border-b-5 border-5 border-[#f5e0a6] shadow-xl shadow-black/10 transition-all duration-300 rounded-t-lg'>
            <div>
                <h1 className='text-2xl font-semibold text-shadow text-[#f5e0a6] letter-spacing-[0.1em]'>Bihar Diwas 2026</h1>
            </div>
            <div className='flex justify-center items-center md:gap-6 gap-2 text-lg font-semibold text-[#f5e0a6]'>
                <a
                    href="#about"
                    className='hover:text-[#f17b03] font-semibold transition-all duration-300'
                >About</a>
                <a
                    href="#schedule"
                    className='hover:text-[#f17b03] font-semibold transition-all duration-300'
                >Schedule</a>
                <a
                    href="#gallery"
                    className='hover:text-[#f17b03] font-semibold transition-all duration-300'
                >Gallery</a>
            </div>
        </nav>
    )
}