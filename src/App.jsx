import React, { createContext } from 'react'
import './App.css'
import Home from './Home/components/Home'
export const Context = createContext() 
function App() {
  // url video header

  const URL_VIDEO_HEADER = "/src/videos/headerVideo.mp4"
  const URL_GALLERY=[
      {url:"/src/image/gallery-1.jpg",title:"PATAGONIA",body:"AN ECOMMERCE EXPERIENCE DRIVEN BY PATAGONIA’S BRAND MISSION"},
      {url:"/src/image/gallery-2.jpg",title:"WILSON",body:"A CENTURY-OLD SPORTS BRAND FINDING ITS PLACE IN CULTURE"},
      {url:"/src/videos/gallery-3.mp4",title:"GOOGLE STORE",body:"AN ECOMMERCE EXPERIENCE HELPING GOOGLE BRING ITS HARDWARE TO PEOPLE ACROSS THE GLOBE"}
  ]
  // const URL_VIDEO_GALLERY="/src/videos/gallery-3.mp4"
  const BASC_NAV_LINKS = [
      {text:"work",href:"/"},
      {text:"about",href:"/"},
      {text:"news",href:"/"},
      {text:"Thinking",href:"/"},
      {text:"Careers",href:"/"},
      {text:"Contact",href:"/"},
  ];

    return (
        <>
            <Context.Provider value={[URL_VIDEO_HEADER, BASC_NAV_LINKS, URL_GALLERY]}>
                <Home/>
            </Context.Provider>
        </>
    )
}

export default App
