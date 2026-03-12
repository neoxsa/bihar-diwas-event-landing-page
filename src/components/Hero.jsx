import React from 'react'
import banner from '/images/banner.webp'

function Hero() {
    return (
        <section className='w-full justify-center items-center flex'>
            <img
                className='object-contain w-full rounded-xl'
                src={banner}
                alt="bihar_diwas_2026" />
        </section>
    )
}

export default Hero