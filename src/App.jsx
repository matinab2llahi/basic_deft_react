import { createContext } from 'react'
import './App.css'
import Home from './Home/components/Home'
export const Context = createContext() 
function App() {
  // url video header 
  const URL_VIDEO_HEADER = "/src/videos/headerVideo.mp4"
  return (
    <>
      <Context.Provider value={[URL_VIDEO_HEADER]}>
        <Home/>
      </Context.Provider>
    </>
  )
}

export default App
