import React from "react";
import ShowcaseTop from "./showcaseTop";
import ShowcaseMid from "./ShowcaseMid";
import WebDesc from "./WebDesc";



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