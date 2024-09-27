import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testamonials from '../components/Testamonials'
import OurTeam from '../components/OurTeam'
import ContactUs from '../components/ContactUs'
import Blogs from '../components/Blogs'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Testamonials />
            <Blogs />
            <OurTeam />
            <ContactUs />
        </>
    )
}

export default Home
