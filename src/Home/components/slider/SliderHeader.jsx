import React from 'react'

//add bootstrap
import 'bootstrap/dist/css/bootstrap.css';
//add style here 
import "../../style/SliderHeader.css"
function SliderHeader() {
    return (
        <div  className='slider_header container '>
            <div className="slider_header__tape">
                <span>00</span>
                <div>
                    <span>/05</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                    </span>
                </div>
            </div>
            <h1 className='text-uppercase fw-bold w-25 '>
                FEATURED ENGAGEMENTS
            </h1>
        </div>
    )
}

export default SliderHeader