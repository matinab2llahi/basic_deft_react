import {useContext} from "react";
// root
import "../../../App.css"
// add style here
import '../../style/MenuStyle.css'

// get Context
import {Context} from "../../../App.jsx";

//add bootstrap
import 'bootstrap/dist/css/bootstrap.css';
function Menu({ToggleMenu,setToggleMenu}){

    // get data
    const [ , BASC_NAV_LINKS]=useContext(Context)

    return(
        <section className={`sec_menu ${ToggleMenu?"active":""}`}>
            <div className={"menu container"}>
                <HeaderMenu/>
                <ul className={"menu_header"}>
                    <BodyMenu>{BASC_NAV_LINKS}</BodyMenu>
                </ul>
                <ClousMenu>{setToggleMenu}</ClousMenu>
            </div>
        </section>
    )
}

function HeaderMenu() {
    return (
        <div className={"menu_header"}>
            <h2>menu</h2>
        </div>
    )
}

function BodyMenu({children}){
    return (
            <>
                {
                    children.map((event,index)=>{
                        return (
                            <>
                                <li key={`menu_${index}`}>
                                    <a href={event.href}>
                                        <span>
                                            {event.text}
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="var(--pink)"
                                                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </>
                        )
                    })
                }
            </>
    )
}

function ClousMenu({children}) {
    return (
        <>
            <button onClick={() => children(false)}>clous <span>+</span></button>
        </>
    )
}

export default Menu