import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Main from './Main';
import ListingLogic from './ListingPage/ListingLogic';
import DetailDisplay from './Details/DetailDisplay';
import PlaceOrders from './Orders/PlaceOrders';
// import ViewOrders from './Orders/ViewOrders';



const Routing = () => {
    return (
        <>
            <BrowserRouter>
                {/* <Header />
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="listingPage/:categoryId" element={<ListingLogic />} />
                        <Route path="details" element={<DetailDisplay />} />
                        <Route path="placeOrders" element={<PlaceOrders />} />
                        <Route path="viewOrders" element={<ViewOrders />} />
                    </Route>
                </Routes>
                <Footer /> */}
                {/* <DetailDisplay /> */}
                {/* <PlaceOrders /> */}
                {/* <Header /> */}
                <Header />
                <Home />
                <Footer />
                {/* <ListingLogic /> */}
                {/* <DetailDisplay /> */}
                {/* <ViewOrders /> */}
                {/* <PlaceOrders /> */}
                {/* <ViewOrders /> */}
            </BrowserRouter >
        </>
    )
}
export default Routing;