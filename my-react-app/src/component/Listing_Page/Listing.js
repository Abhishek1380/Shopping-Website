// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import './Listing.css';
// import axios from 'axios';
// import CostFilter from '../filters/costFilter';

// const base_url = "http://127.0.0.1:9001";

// const Listing = () => {
//     let params = useParams();
//     const [restList, setRestList] = useState();
//     let P_Id = params.p_id;

//     useEffect(() => {
//         // sessionStorage.setItem('p_id', P_Id);

//         axios.get(`${base_url}/ProductDesc?p_id=${P_Id}`)
//             .then((res) => {
//                 console.log('API Response:', res.data);
//                 setRestList(res.data);
//             })
//             .catch((error) => {
//                 console.log('API Error:', error);
//             });
//     }, []);

//     console.log('restList:', restList);

//     const setDataPerFilter = (data) => {
//         setRestList(data);
//     };

//     const ListingDisplay = ({ listData }) => {
//         const renderData = (data) => {
//             if (data) {
//                 if (data.length > 0) {
//                     return data.map((item) => (
//                         <div className="section">
//                             <div className="sec">
//                                 <div className="logo">
//                                     <img src={item.img} alt="Food Image" />
//                                 </div>
//                                 <div className="sec-2">
//                                     <h2>AMA Cafe</h2>
//                                     <Link to={`/details?productSpec_id=${item.productSpec_id}`} key={item.ProductSpec_id} >
//                                         {/* key={item.ProductSpec_id} */}
//                                         <p>{item.name}</p>
//                                     </Link>
//                                     {/* <div onClick={e => { console?.log(item.productSpec_id) }}>
//                                     </div> */}
//                                     <p>Review: {item.reviews}</p>
//                                     <p>Rating: {item.rating}</p>
//                                     <p>Price: {item.p_price}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ));
//                 } else {
//                     return <h2>No Data Found</h2>;
//                 }
//             } else {
//                 return (
//                     <div>
//                         <h2>Loading</h2>
//                         <img src="/images/loader.gif" alt="loader" />
//                     </div>
//                 );
//             }
//         };

//         return <div className='cuisine'>{renderData(listData)}</div>;
//     };

//     return (
//         <>
//             <div className='row'>
//                 <div id="mainListing">
//                     <ListingDisplay listData={restList} />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Listing;


import React from "react";
import ListingLogic from "./ListingLogic";

const Home = () => {
    return (
        <>
            <div>
                <ListingLogic />
            </div>
        </>
    )
}
export default Home;