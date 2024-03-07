import {useContext,useEffect,useRef, useState} from "react";

// add link css & js slider
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// add style here
import '../../style/SliderBody.css'
// add root
import '/src/App.css'
// add bootstarp
import 'bootstrap/dist/css/bootstrap.css';
// add context
import {Context} from "../../../App.jsx";

function SliderBody(){
    const SliderRef = useRef(null)

    const [,,,BACE_SLIDER] =useContext(Context)

    const [StatusMouse, setStatusMouse] = useState(false)

    useEffect(() => {

    }, [StatusMouse]);
    return(
        <div

            className="slider_body"
            onMouseMove={(e)=>{
                SliderRef.current.style.top = e.pageY + "px"
                SliderRef.current.style.left = e.pageX + "px"

            }}
            onMouseOut={()=>{
                setStatusMouse(false)
                SliderRef.current.style.top = "2950px"
                SliderRef.current.style.left = "150px"

            }}
            onMouseDown={()=> {
                setStatusMouse(true)
            }}
            onMouseUp={()=>setStatusMouse(false)}
        >
            <button
                className={`slider__fallow_mouse ${StatusMouse?"active":""} text-uppercase`}
                ref={SliderRef}
                onMouseDown={()=> {
                    setStatusMouse(true)
                }}
                onMouseUp={()=>setStatusMouse(false)}
            >
                {StatusMouse ? "":"drag"}
            </button>
            <Splide
                options={{
                    drag:"free",
                    arrows:false,
                    pagination:false,
                    perPage:3,
                    padding:"12%"
                }}
            >
                {
                    BACE_SLIDER.map((event,index)=>{
                        return(
                            <>
                                <SplideSlide key={index} className="slider_items me-5">
                                    <div className="slider_box__icon">
                                        <img loading="lazy" alt={`${event.name} logo photo`} src={event.icon}/>
                                    </div>
                                    <div className="slider_box__text">
                                        <h5 className={'text-uppercase fw-bolder m-0 mb-3'}>
                                            {event.name}
                                        </h5>
                                        <p className={"fw-medium m-0"}>
                                            {event.text}
                                            <a href={event.linkHere}>here.</a>
                                        </p>
                                    </div>
                                </SplideSlide>
                            </>
                        )
                    })
                }
            </Splide>
        </div>
    )
}

export default SliderBody