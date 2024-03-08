import {createContext, useState} from 'react'
import "../style/HomeStyle.css"
import Header from './header/Header'
import NavLink from "./navLink/NavLink.jsx";
import Intro from "./intro/Intro.jsx";
import About from "./about/About.jsx";
import Gallery from "./gallery/Gallery.jsx";
import SliderHeader from './slider/SliderHeader.jsx';
import SliderBody from "./slider/SliderBody.jsx";
import Scroll from "./scroll/Scroll.jsx";
import News from "./news/News.jsx";
import Footer from "./footer/Footer.jsx";
import Menu from "./navLink/Menu.jsx";
export const ToggleContext=createContext()
function Home() {
    const [ToggleMenu, setToggleMenu] = useState(false)
    
    return (
        <>
            <NavLink ToggleMenu={ToggleMenu} setToggleMenu={setToggleMenu}/>
            <Menu ToggleMenu={ToggleMenu} setToggleMenu={setToggleMenu}/>
            <Header/>
            <Intro/>
            <About/>
            <Gallery/>
            <section className='sec_slider' style={{overflow:"hidden"}}>
                <SliderHeader/>
                <SliderBody/>
            </section>
            <Scroll/>
            <News/>
            <Footer/>
        </>
    )
}

export default Home