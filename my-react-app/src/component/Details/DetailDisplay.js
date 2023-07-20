


import React, { useState, useEffect } from 'react';
import './detail.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../Header';

const base_url = "http://127.0.0.1:6005";

// const DetailDisplay = () => {

//     let navigate = useNavigate()
//     let [searchParams] = useSearchParams()
//     let [restDetails, setrestDetails] = useState()
//     // let [category_id] = useState(sessionStorage.getItem('categoryId'))


//     let P_id = searchParams.getAll('productSpec_id');
//     const restDetail = async () => {
//         const rdata = await axios.get(`${base_url}/product_desc/${P_id}`);
//         setrestDetails(rdata.data[0])
//     }

//     useEffect(() => {

//         restDetail()
//     }, [])

//     // const proceed = () => {
//     //     navigate(`/placeOrder/${restDetails.restaurant_name}`)
//     // }

//     const renderDetails = () => {
//         if (restDetails) {
//             return (
//                 <>
//                     <Header />
//                     <div className="detail">
//                         <div className="detail_1">
//                             <div className="div_img">
//                                 <img src={renderDetails.img} alt="img" />
//                             </div>
//                         </div>
//                         <div className="detail_2">
//                             <div className="detail_22">
//                                 <h2>{renderDetails.name}</h2>
//                                 <p className="rating">Rating:{renderDetails.rating}</p>
//                                 <div className="specs">
//                                     <p className="rating">Specifications:</p>
//                                     <ul>
//                                         <li className="specs">Warranty: 3 Years</li>
//                                         <li className="specs">Panel-Type: IPS Panel</li>
//                                         <li className="specs">HDMI-Ports: 3</li>
//                                         <li className="specs">Battery: 8hrs</li>
//                                     </ul>
//                                     <p className="rating">Price: 11,200Rs</p>
//                                     {/* <Link className="btn" to={`/Listing/${categoty_id}`} >Back</Link>
//                                     <button className="btn-detail" onClick={proceed}>Proceed</button> */}
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


const DetailDisplay = () => {
    let navigate = useNavigate();
    let [searchParams] = useSearchParams();
    let [restDetails, setRestDetails] = useState();
    let [category_id] = useState(sessionStorage.getItem('categoryId'))

    // let P_id = searchParams.getAll('productSpec_id');
    let params = useParams();
    let P_id = params.productSpec_id;
    const fetchRestDetails = async () => {
        try {

            const response = await axios.get(`${base_url}/details?productSpec_id=${P_id}`);
            setRestDetails(response.data[2]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchRestDetails();
    }, []);
    const proceed = () => {
        navigate(`/placeOrder/${restDetails.name}`)
    }

    const renderDetails = () => {
        if (restDetails) {
            return (
                <>
                    <Header />
                    <div className="detail">
                        <div className="detail_1">
                            <div className="div_img">
                                <img src={restDetails.img} alt="img" />
                            </div>
                        </div>
                        <div className="detail_2">
                            <div className="detail_22">
                                <h2>{restDetails.name}</h2>
                                <p className="rating">Rating: {restDetails.rating}</p>
                                <div className="specs">
                                    <p className="rating">Specifications:</p>
                                    <ul>
                                        <li className="specs">Warranty: 3 Years</li>
                                        <li className="specs">Panel-Type: IPS Panel</li>
                                        <li className="specs">HDMI-Ports: 3</li>
                                        <li className="specs">Battery: 8hrs</li>
                                    </ul>
                                    <p className="rating">Price: 11,200 Rs</p>
                                    <Link className="btn" to={`/Listing/${category_id}`}>Back</Link>
                                    <button className="btn-detail" onClick={proceed}>Proceed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        return null; // Return null if restDetails is falsy
    };

    return (
        <>
            {renderDetails()}
        </>
    );
};
export default DetailDisplay;