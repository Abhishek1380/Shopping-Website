import React from "react";
import ShowcaseTop from "./showcaseTop";
import ShowcaseMid from "./ShowcaseMid";
import WebDesc from "./WebDesc";
// import Header from '../Header';
// import QuickSearch2 from "./QuickSearch2";
// import QuickSearch3 from "./QuickSearch3";
// import ShowcaseMid from "./ShowcaseMid";


const Home = () => {
    return (
        <>

            <div className="showcase">
                <ShowcaseTop />
            </div>
            <ShowcaseMid />
            <WebDesc />


        </>
    )
}
export default Home;