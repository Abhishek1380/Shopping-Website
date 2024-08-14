// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './detail.css'
// import axios from 'axios';
// import { useSearchParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// const base_url = "http://127.0.0.1:9002";

// const DetailDisplay = () => {
//     let [searchParams] = useSearchParams();
//     let [restDetails, setrestDetails] = useState();
//     // let [category_id] = useState(sessionStorage.getItem('categoryId'))
//     let params = useParams();

//     let P_id = searchParams.get('productSpec_id')
//     const restDetail = async () => {
//         let ProductSpec_id = params.productSpec_id;
//         const rdata = await axios.get(`${base_url}/details?productSpec_id=${ProductSpec_id}`);
//         // axios.get(`${base_url}/products_list_1?category_id=${categoryId}`)
//         setrestDetails(rdata.data)
//     }

//     useEffect(() => {
//         restDetail()
//     }, [])

//     const renderDetails = () => {
//         if (restDetails) {
//             return (
//                 <>
//                     <div className="detail">
//                         <div className="detail_1">
//                             <div className="div_img">
//                                 <img src="https://i.ibb.co/HnSnTKH/BenQ-7.webp" alt="img" />
//                             </div>
//                         </div>
//                         <div className="detail_2">
//                             <div className="detail_22">
//                                 <h2>Mi by Xiaomi Beard Trimmer 2 C Trimmer 90 min Runtime 40 Length Settings (Black)</h2>
//                                 <p className="rating">Rating: <span>4.7</span></p>
//                                 <div className="specs">
//                                     <p className="rating">Specifications:</p>

//                                     <p className="specs">Warranty: 3 Years</p>
//                                     <p className="specs">Panel-Type: IPS Panel</p>
//                                     <p className="specs">HDMI-Ports: 3</p>
//                                     <p className="specs">Battery: 8hrs</p>

//                                     <p className="rating">Price: 11,200Rs</p>
//                                     <button className="btn">Back</button>
//                                     <button className="btn">Proceed</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                 </>
//             )
//         }
//     }




//     return (
//         <>
//             {renderDetails()}
//         </>
//     )
// }

// export default DetailDisplay;


import React from "react";
import DetailLogic from "./DetailLogic";

const Detail = () => {
    return (
        <>
            <DetailLogic />
        </>
    )
}
export default Detail;