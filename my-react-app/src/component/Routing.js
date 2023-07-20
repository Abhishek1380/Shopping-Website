import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
// import QuickSearch1 from './QuickSearch1';
import Home from './Home/Home';
import Main from './Main';
import ListingLogic from './Listing_Page/ListingLogic';
import DetailDisplay from './Details/DetailDisplay';
import PlaceOrders from './Orders/PlaceOrders';
import ListingPLogic from './ListingProduct/ListingPLogic';
import ViewOrders from './Orders/ViewOrders';
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
                        <Route path="Listing_page/:category_id" element={<ListingLogic />} />
                        <Route path="ListingProducts/:productId" element={<ListingPLogic />} />
                        <Route path="details" element={<DetailDisplay />} />
                        <Route path="placeOrders" element={<PlaceOrders />} />
                        <Route path="viewOrders" element={<ViewOrders />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter >
        </>
    )
}
export default Routing;