import {useContext} from 'react'
import { Context } from '../../../App'
import '/src/App.css'
import "../../style/VideoHandler.css"
function VideoHandler() {
    const [URL_VIDEO_HEADER] = useContext(Context)
    return (
        <>
            <video src={URL_VIDEO_HEADER} >
            </video>
        </>
    )
}

export default VideoHandler