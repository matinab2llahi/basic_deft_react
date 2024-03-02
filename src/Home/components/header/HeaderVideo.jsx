import {useContext, useState, useEffect, useRef} from 'react'
import { Context } from '../../../App'
import '/src/App.css'
import '../../style/HeaderStyle.css'
import "../../style/VideoHandler.css"
let TimeVideo = 0;
function VideoHandler({StatusVideo, setStatusVideo}) {
    const [URL_VIDEO_HEADER] = useContext(Context)

    const videoRef = useRef();
    const SeekberVideo = useRef(null)
    const SeekberVideoText = useRef(null)


    const changeTimeUpdate=(time, timeEnd)=>{
        let timeNow = {
            h :  Math.floor((time% 86400) / 3600 ),
            m :  Math.floor((time% 3600) / 60)    ,
            s : Math.floor(  time % 60)
        }
        let endTime = {
            h :  Math.floor((timeEnd% 86400) / 3600 ),
            m :  Math.floor((timeEnd% 3600) / 60)    ,
            s : Math.floor(  timeEnd % 60)
        }
        SeekberVideo.current.style.width = ( time / timeEnd * 100) + '%'

        timeNow.h < 10 ? timeNow.h = "0" + timeNow.h  : timeNow.h
        timeNow.m < 10  ? timeNow.m = "0" + timeNow.m  : timeNow.m
        timeNow.s < 10 ? timeNow.s = "0" + timeNow.s  : timeNow.s

        endTime.h < 10 ? endTime.h = "0" + endTime.h  : endTime.h
        endTime.m < 10  ? endTime.m = "0" + endTime.m  : endTime.m
        endTime.s < 10 ? endTime.s = "0" + endTime.s  : endTime.s
        timeNow.h == 0 ? SeekberVideoText.current.innerHTML = `${timeNow.m}:${timeNow.s}/${endTime.m}:${endTime.s}` : SeekberVideoText.current.innerHTML = `${timeNow.h} : ${timeNow.m} : ${timeNow.s}`
    }
    const LoadVideo = ()=>{
        if(StatusVideo) {
            SeekberVideo.current.style.display = "none"
            videoRef.current.currentTime += 14
        }else {

        }
    }
    const ChangeVideo =(Time,displayHoverBox,displaySeek,muted)=>{
        TimeVideo = videoRef.current.currentTime
        videoRef.current.currentTime = 0
        videoRef.current.currentTime += Time
        videoRef.current.muted = muted
        // hoverVideoHeeader.style.display = displayHoverBox
        if(StatusVideo){
            SeekberVideo.current.style.display = "none"
        }else {
            SeekberVideo.current.style.display = "flex"
        }
    }
    useEffect(() => {
        // auto Play
        // videoRef.current.pause()
        videoRef.current.play()
        if(StatusVideo ) {
            ChangeVideo(TimeVideo,"flax","none",true)
            videoRef.current.addEventListener('timeupdate', ()=>{
                if(videoRef.current.currentTime >= 40){
                    videoRef.current.currentTime=0
                    videoRef.current.currentTime+=14
                    videoRef.current.play()
                }
            })
        }else {
            ChangeVideo(TimeVideo,"none","flax",false)
            videoRef.current.addEventListener('timeupdate', ()=>{
                changeTimeUpdate(videoRef.current.currentTime, videoRef.current.duration)
            })
        }
    }, [StatusVideo])
    return (
        <>
            <video className="haderVideo" src={URL_VIDEO_HEADER} ref={videoRef} muted loop onPlay={LoadVideo}></video>
            <div  className="box_seekber">
                <div className="seekber_now" ref={SeekberVideo} >
                    <span ref={SeekberVideoText}>00:00 / 00:00</span>
                </div>
            </div>
        </>
    )
}

export default VideoHandler