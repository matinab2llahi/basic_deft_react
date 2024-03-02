import {useContext} from "react";
// add style here
import '../../style/GalleryStyle.css'
// add root
import "../../../App.css"
// add bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// add context url here
import {Context} from "../../../App.jsx";

function Gallery(){
    const [,,URL_GALLERY]=useContext(Context)
    return(
        <>
            <section className="gallery container">
                <ul>
                    {
                        URL_GALLERY.map((event, index)=>{
                            return(
                                <li key={index}>
                                    <div>
                                        <div className="gallery__img">
                                            {event.url.split(".mp4").length === 2? <video src={event.url} autoPlay muted loop></video>:<img src={event.url} alt=""/>}
                                        </div>
                                        <a className="hover_a">{event.title}</a>
                                        <p className="">{event.body}</p>
                                    </div>
                                </li>

                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}

export default Gallery