import {useEffect, useRef} from "react";

// add style here
import '../../style/ScrollStyle.css'
// add style root
import '/src/App.css'
// add bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import ScroolVideo from "./ScroolVideo.jsx";

function Scroll(){
    // start root 2970
    // end root 3940
    // top 3160
    const textbox=useRef(null)
    useEffect(() => {
        document.addEventListener("scroll",()=>{
            if(window.scrollY>2800){
                document.documentElement.style.setProperty("--white","#242424")
                document.documentElement.style.setProperty("--black","#f9cdcd")
                document.documentElement.style.setProperty("--white-nav","#242424")
                document.documentElement.style.setProperty("--black-nav","#f9cdcd")
            }else if(window.scrollY<2800 && window.scrollY>1000){
                document.documentElement.style.setProperty("--white","#f1f1f1")
                document.documentElement.style.setProperty("--black","#242424")
                document.documentElement.style.setProperty("--white-nav","#f1f1f1")
                document.documentElement.style.setProperty("--black-nav","#242424")
            }
            // console.log((window.scrollY-2930>0 && window.scrollY<3330))
            if(window.scrollY<2930){
                textbox.current.style.top=0+"px"
            }
            if (window.scrollY-2930>0 && window.scrollY<3330){
                textbox.current.style.top = (window.scrollY-2930)+"px"
            }
            if(window.scrollY>3330){
                textbox.current.style.top = 400+"px"
            }

        })

    }, []);
    return(
        <section className={"sec_scroll"}>
            <div className={"scroll container"}>
                <div className={"scroll_box__text text-uppercase"} ref={textbox}>
                    <h1 className={"scroll___title"}>BASIC/DEPT® helps brands ● connect w/ culture</h1>
                    <p>Adweek <b>Agency Spotlight</b></p>
                    <button className={"hover_btn m-0 text-uppercase"}>about us</button>
                </div>
                <ScroolVideo/>
            </div>
        </section>
    )
}

export default Scroll