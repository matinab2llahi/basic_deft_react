import {} from "react";

// add style here
import '../../style/NewsStyle.css'
// add style root
import '/src/App.css'
// add bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import NewsItems from "./NewsItems.jsx";
function News(){
    return(
        <section className={"sec_news"}>
            <div className={"news container"}>
                <div className={"news_box__header d-flex justify-content-between align-items-center"}>
                    <h1 className="text-uppercase fw-bold w-25">FEATURED NEWS</h1>
                    <button className={"hover_btn m-0 text-uppercase"}>view all</button>
                </div>
                <NewsItems/>

            </div>
        </section>
    )
}

export default News