import React from "react";
// add style here
import "../../style/ScrollVideo.css"
function ScroolVideo(){
    return(
            <div className={"scroll_box__video"}>
                <video className={"scrool_video"} src={"/src/videos/scrollVideo.mp4"} autoPlay muted loop></video>
            </div>
        )
}
export default ScroolVideo