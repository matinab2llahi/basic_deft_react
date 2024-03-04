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
  const BASC_NAV_LINKS = [
      {text:"work",href:"/"},
      {text:"about",href:"/"},
      {text:"news",href:"/"},
      {text:"Thinking",href:"/"},
      {text:"Careers",href:"/"},
      {text:"Contact",href:"/"},
  ];
  const BACE_SLIDER = [
      {
          name:"goolge",
          icon:"https://cdn.sanity.io/images/8nn8fua5/production/7121121ed910b145bdb6df487966a7888c2eb7c3-272x92.svg?w=720&fm=webp&q=65",
          text:"Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership ",
          linkHere:"#"
      }
      ,
      {
          name:"kfc",
          icon:"https://cdn.sanity.io/images/8nn8fua5/production/09a68ec6d03469bfd5bbb9726a58225acb900ae2-128x42.svg?w=720&fm=webp&q=65",
          linkHere: "#",
          text:"An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership "
      },
      {
          name:"WILSON",
          icon:"https://cdn.sanity.io/images/8nn8fua5/production/fbb650ce74c1849cb4da2d9951fad89149494cc9-171x42.svg?w=720&fm=webp&q=65",
          linkHere: "#",
          text:"A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study "
      },
      {
          name:"AT&T",
          icon:"https://cdn.sanity.io/images/8nn8fua5/production/b2624b2d49d9c14eec0cd30203c5eec0331eac42-42x42.svg?w=720&fm=webp&q=65",
          linkHere: "#",
          text:"Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services."
      },
      {
          name:"Patagonia",
          icon:"https://cdn.sanity.io/images/8nn8fua5/production/8dd2f090726c8d5befeaa2924b44678e69452945-1024x200.svg?w=720&fm=webp&q=65",
          linkHere: "#",
          text:"Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study "
      }
  ]
    return (
        <>
            <Context.Provider value={[URL_VIDEO_HEADER, BASC_NAV_LINKS, URL_GALLERY,BACE_SLIDER]}>
                <Home/>
            </Context.Provider>
        </>
    )
}

export default App
