import {useContext, useState, useEffect, useRef} from 'react'
import { Context } from '../../../App'
import ReactPlayer from "react-player";
import '/src/App.css'
import '../../style/HeaderStyle.css'
import "../../style/VideoHandler.css"
import VimeoPlayer from "react-player/vimeo.js";
function VideoHandler() {
    const [StatusVideo, setStatusVideo] = useState(true)

    const [URL_VIDEO_HEADER] = useContext(Context)

    const videoRef = useRef(null);

    useEffect(() => {
        // auto Play
        if(videoRef.current !== null){
            videoRef.current.play()
        }

        // این فقط کد زدم فقط ببینی که url ش درسته
        videoRef.current.currentTime=30
    }, [])
    return (
        <>
            <video src={URL_VIDEO_HEADER} ref={videoRef} loop></video>
            <div className="box_seekber">
                <div className="seekber_now">
                    <span>00:00</span>
                </div>
            </div>
        </>
    )
}

export default VideoHandler