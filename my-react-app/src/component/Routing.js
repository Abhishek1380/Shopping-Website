import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Main from './Main';
import ListingLogic from './ListingPage/ListingLogic';
import DetailLogic from './Details/DetailLogic';


const Routing = () => {
    return (
        <>
            <BrowserRouter>
                {/* <Header /> */}
                {/* <Routes> */}
                {/* <Route path="/" element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path="Home" element={<Home />} /> */}

                {/* <Route path="ListingPage/:category_id" element={<ListingLogic />} /> */}
                {/* <Route path="ListingPage/ListingLogic" element={<ListingLogic />} /> */}

                {/* </Routes> */}

                {/* <Footer /> */}
                {/* <ListingLogic /> */}
                {/* <ListingLogic /> */}
                {/* <Header />
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="details" element={<DetailDisplay />} />
                    </Route>
                </Routes>
                <Footer /> */}
                {/* <Header /> */}
                <DetailLogic />
                {/* <Footer /> */}
            </BrowserRouter >

        </>
    )
}
export default Routing;