import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
// import QuickSearch1 from './QuickSearch1';
import Home from './Home/Home';
import Main from './Main';
import Listing from './Listing_Page/Listing';
import DetailDisplay from './Details/DetailDisplay';
import PlaceOrders from './Orders/PlaceOrders';
import ListingPLogic from './ListingProduct/ListingPLogic';
import JustOrder from './Orders/JustOrder';
import ShowcaseMid from './Home/ShowcaseMid';



const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Listing_page/:p_id" element={<Listing />} />
                        <Route path="details" element={<DetailDisplay />} />
                        <Route path="placeOrder/:product_name" element={<PlaceOrders />} />
                        <Route path="JustOrder" element={<JustOrder />} />
                    </Route>
                </Routes>


                <Footer />
            </BrowserRouter >
        </>
    )
}
export default Routing;