import React from 'react'
import "../style/HomeStyle.css"
import Header from './header/Header'
import NavLink from "./navLink/NavLink.jsx";
import Intro from "./intro/Intro.jsx";
import About from "./about/About.jsx";
import Gallery from "./gallery/Gallery.jsx";
import SliderHeader from './slider/SliderHeader.jsx';
import SliderBody from "./slider/SliderBody.jsx";
function Home() {
    return (
        <>
            <NavLink/>
            <Header/>
            <Intro/>
            <About/>
            <Gallery/>
            <section className='sec_slider'>
                <SliderHeader/>
                <SliderBody/>
            </section>
        </>
    )
}

export default Home