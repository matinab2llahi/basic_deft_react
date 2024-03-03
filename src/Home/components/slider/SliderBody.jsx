import {useEffect} from "react";

// add link css & js slider
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// add style here
import '../../style/SliderBody.css'
// add root
import '/src/App.css'
// add bootstarp
import 'bootstrap/dist/css/bootstrap.css';
function SliderBody(){
    return(
        <div className="slider_body">
            <Splide
                options={{
                    drag:"free",
                    arrows:false,
                    pagination:false,
                    perPage:3,
                    padding:"7%"
                }}
            >
                <SplideSlide className="slider_items me-5">
                    <div className="slider_box__icon">
                        <img loading="lazy" alt="google" src="https://cdn.sanity.io/images/8nn8fua5/production/7121121ed910b145bdb6df487966a7888c2eb7c3-272x92.svg?w=720&fm=webp&q=65"/>
                    </div>
                    <div className="slider_box__text pt-5">
                        <h5 className={'text-uppercase fw-bolder m-0 mb-3'}>
                            test
                        </h5>
                        <p className={"fw-medium m-0"}>
                            Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership <a href={"#"}>here.</a>
                        </p>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default SliderBody