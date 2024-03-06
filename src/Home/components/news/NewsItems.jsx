import {useContext} from "react";
// add style here
import '../../style/NewsItems.css'
// add context data
import {Context} from "../../../App.jsx";

function NewsItems(){
    const [,,,,BACE_NEWS] = useContext(Context)
    return(
        <ul className={"news_box__body"}>
            {
                BACE_NEWS.map((event, index)=>{
                    return(
                        <li key={index}>
                            <div className={"news_items__img"}>
                                <img
                                    src={event.url}
                                    alt={event.name}/>
                            </div>
                            <div className={"news_items__text ps-4 w-50"}>
                                <a className={"text-uppercase fw-medium p-0 m-0"}>{event.title}</a>
                                <span className={"text-uppercase"}><b className={"pe-2"}>Press</b>{event.date}</span>
                            </div>
                            <div className={"news_box__icons"}>
                                <svg style={{right:"40px"}} xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 448 512">
                                    <path fill={"var(--black)"}
                                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 448 512">
                                    <path fill={"var(--black)"}
                                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                                </svg>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NewsItems