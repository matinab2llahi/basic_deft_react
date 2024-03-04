import React from 'react'
import "../style/HomeStyle.css"
import Header from './header/Header'
import NavLink from "./navLink/NavLink.jsx";
import Intro from "./intro/Intro.jsx";
import About from "./about/About.jsx";
import Gallery from "./gallery/Gallery.jsx";
import SliderHeader from './slider/SliderHeader.jsx';
import SliderBody from "./slider/SliderBody.jsx";
import Scroll from "./scroll/Scroll.jsx";
function Home() {
    return (
        <>
            <NavLink/>
            <Header/>
            <Intro/>
            <About/>
            <Gallery/>
            <section className='sec_slider' style={{overflow:"hidden"}}>
                <SliderHeader/>
                <SliderBody/>
            </section>
            <Scroll/>
        </>
    )
}

export default Home