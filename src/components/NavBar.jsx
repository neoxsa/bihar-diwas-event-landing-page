import React from 'react'

export default function NavBar() {
  return (
<nav className='flex justify items-center p-4'>
        <div>
            {/* <img src={logo} alt="logo" className='w-10 h-10' /> */}
        </div>
        <ul className='flex justify-center items-center gap-4 text-lg'>
            <li>Home</li>
            <li>About</li>
            <li>Schedule</li>
            <li>Gallery</li>
            <li>Location</li>
            <li>Contact</li>
        </ul>
    </nav>
)
}