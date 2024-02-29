import { createContext } from 'react'
import './App.css'
import Home from './Home/components/Home'
export const Context = createContext() 
function App() {
  // url video header 
  const URL_VIDEO_HEADER = "/src/videos/headerVideo.mp4"
  const BASC_NAV_LINKS = [
      {text:"work",href:"/"},
      {text:"about",href:"/"},
      {text:"news",href:"/"},
      {text:"Thinking",href:"/"},
      {text:"Careers",href:"/"},
      {text:"Contact",href:"/"},
  ]
  return (
    <>
      <Context.Provider value={[URL_VIDEO_HEADER, BASC_NAV_LINKS]}>
        <Home/>
      </Context.Provider>
    </>
  )
}

export default App
