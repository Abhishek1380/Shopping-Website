import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Main from './Main';
import ListingLogic from './ListingPage/ListingLogic';
import ListingDisplay from './ListingPage/ListingDisplay';

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="ListingPage/:p_Id" element={<ListingDisplay />} />
                        <Route path="ListingPage/:p_Id" element={<ListingLogic />} />
                    </Route>
                </Routes>

                <Footer />
            </BrowserRouter>

        </>
    )
}
export default Routing;