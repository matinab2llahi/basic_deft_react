import {} from "react";
// add style here
import '../../style/NewsItems.css'
function NewsItems(){
    return(
        <ul className={"news_box__body"}>
            {

            }
            <li>
                <div className={"news_items__img"}>
                    <img
                        src={"https://cdn.sanity.io/images/8nn8fua5/production/162fd00622e522dddacedbb98f34181c860a6bbd-1000x734.png?w=720&fm=webp&q=65"}
                        alt={""}/>
                </div>
                <div className={"news_items__text ps-4 w-50"}>
                    <h2 className={"text-uppercase p-0 m-0"}>Breaking Through the Branding Blahs</h2>
                    <span className={"text-uppercase"}><b className={"pe-2"}>Press</b>6.16.23</span>
                </div>
            </li>
            <li>
                <div className={"news_items__img"}>
                    <img
                        src={"https://cdn.sanity.io/images/8nn8fua5/production/162fd00622e522dddacedbb98f34181c860a6bbd-1000x734.png?w=720&fm=webp&q=65"}
                        alt={""}/>
                </div>
                <div className={"news_items__text ps-4 w-50"}>
                    <h2 className={"text-uppercase p-0 m-0"}>Breaking Through the Branding Blahs</h2>
                    <span className={"text-uppercase"}><b className={"pe-2"}>Press</b>6.16.23</span>
                </div>
            </li>
        </ul>
    )
}

export default NewsItems