import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Main from './Main';

import Listing from './Listing_Page/Listing';
// import ListingPLogic from './ListingProduct/ListingPLogic';

import Detail from './Details/Detail';
import PlaceOrders from './Orders/PlaceOrders';
import ViewOrders from './Orders/ViewOrders';




const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path="Home" element={<Home />} />
                        {/* <Route path="ProductList11/:p_id" element={<Listing />} /> */}
                        <Route path="ProductList1/:p_id" element={<Listing />} />


                        <Route path="details/:productSpec_id" element={<Detail />} />
                        <Route path="placeOrder/:product_name" element={<PlaceOrders />} />
                        <Route path='ViewOrders' element={<ViewOrders />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter >
        </>
    )
}
export default Routing;