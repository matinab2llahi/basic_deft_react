import {} from "react";
// add style here
import '../../style/FooterStyle.css'
// add style root
import '/src/App.css'
// add bootstrap
import 'bootstrap/dist/css/bootstrap.css';
function Footer(){
    return(
        <footer>
            <div className={"box_footer container"}>
                <FooterHeader/>
                <FooterBody/>
            </div>
        </footer>
    )
}
// add header Footer
function FooterHeader(){
    return(
        <div  className={"footer__header"}>
            <HeaderLogo/>
            <HeaderTitle/>
        </div>
    )
}
function HeaderLogo(){
    return(
        <div className={"footer___logo"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 100" aria-hidden="true" data-acsb-hidden="true"
                 data-acsb-force-hidden="true">
                <path fill={"var(--white)"}
                    d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0v84.4zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7zm2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1zM128.3 0h-18.9L73.6 100h18.5L128.3 0zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2zm-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6zM224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1zm7.9 0c0-18.9 14.7-34 33.2-34 18.5 0 33.2 15.1 33.2 34s-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34zM246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1z"></path>
            </svg>
        </div>
    )
}
function HeaderTitle(){
    return(
        <div className={"footer___title"}>
            <p>We collaborate with ambitious brands and people. Let's build. <a href={""}>biz@basicagency.com</a></p>
        </div>
    )
}

// add body Footer
function FooterBody(){
    return(
        <div className={"footer__body"}>
            <ul className={"footer___items"}>
                <li className={"footer_box___input"}>
                    <BodyTitle value={BASE_ITEMS[0].title}/>
                    <ul>
                        <BodyInput/>
                    </ul>
                </li>
                <li>
                    <BodyTitle value={BASE_ITEMS[1].title}/>
                    <ul>
                        <BodyLink
                        index={[1,5]}
                        />
                    </ul>
                </li>
                <li>
                    <BodyTitle value={BASE_ITEMS[5].title}/>
                    <ul>
                        <BodyLink
                        index={[5,10]}
                        />
                    </ul>
                </li>
                <li>
                    <BodyTitle value={BASE_ITEMS[11].title}/>
                    <ul>
                        <BodyLink index={[10,18]}/>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

function BodyTitle({value}) {
    return (
        <>
            <h1>{value}</h1>
        </>
    )
}
function BodyLink({index}){
    return(
        <>
            {
                BASE_ITEMS.slice(...index).map((event,index)=>{
                    return(
                        <>
                            <li key={`linkFooter_${event.title}_${index}`}>
                                <a href={event.href}><span>{event.text}</span></a>
                            </li>
                        </>
                    )
                })
            }
        </>
    )
}
function BodyInput(){
    return(
        <>
            <li>
                <input type={"email"} title={""} required placeholder={"email address"}/>
                <button style={{background:"transparent", border:"none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="var(--white)"
                              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                </button>
            </li>
        </>
    )
}

const BASE_ITEMS = [
    // sec 1
    {
        title: "STAY IN THE KNOW",
        text: null,
        href: null
    }
    // sec 2
    ,
    {
        title: "SOCIAL",
        text: "Instagram",
        href: "#"
    }
    ,
    {
        title: "SOCIAL",
        text: "Twitter",
        href: "#"
    },
    {
        title: "SOCIAL",
        text:"LinkedIn",
        href:"#"
    }    ,
    {
        title:"SOCIAL",
        text:"Facebook",
        href:"#"
    }
    // sec 3
    ,
    {
        title:"INITIATIVES",
        text:"Crafted",
        href:"#"
    }
    ,
    {
        title:"INITIATIVES",
        text:"Applied",
        href:"#"
    }
    ,
    {
        title:"INITIATIVES",
        text:"Brandbeats",
        href:"#"
    }
    ,
    {
        title:"INITIATIVES",
        text:"Moves",
        href:"#"
    }
    ,
    {
        title:"INITIATIVES",
        text:"B®/Good",
        href:"#"
    }
    // sec 4
    ,
    {
        title:"OFFICES",
        text:"San Diego – CA",
        href:"#"
    }
    ,
    {
        title:"OFFICES",
        text:"New York – NY",
        href:"#"
    },
    {
        title:"OFFICES",
        text:"Bay Area – CA",
        href:"#"
    },
    {
        title:"OFFICES",
        text:"St. Louis – MO",
        href:"#"
    },
    {
        title:"OFFICES",
        text:"Amsterdam – NL",
        href:"#"
    },
    {
        title:"OFFICES",
        text:"London – EN",
        href:"#"
    },
    {
        title:"OFFICES",
        text:"Berlin – GE",
        href:"#"
    },
    {
        title:"OFFICES",
        text:"Argentina – AR",
        href:"#"
    }
]
export default Footer