


import React, { useState, useEffect } from 'react';
import './detail.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../Header';

const base_url = "http://127.0.0.1:9001";

const DetailDisplay = () => {
    let navigate = useNavigate();
    let [searchParams] = useSearchParams();
    let [restDetails, setRestDetails] = useState();
    let [p_id] = useState(sessionStorage.getItem('p_Id'))

    //  let P_id = searchParams.getAll('productSpec_id');
    let params = useParams();
    let SpecId = params.productSpec_id;
    const fetchRestDetails = async () => {
        try {

            const response = await axios.get(`${base_url}/ProductList11?productSpec_id=${SpecId}`);
            setRestDetails(response.data[0]);
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
                    <div class="detail">
                        <div class="detail_1">
                            <div class="div_img">
                                <img src={restDetails.img} alt="img" />
                            </div>
                        </div>
                        <div class="detail_2">
                            <div class="detail_22">
                                <h2>{restDetails.name}</h2>
                                <p class="rating">Rating: {restDetails.rating}</p>
                                <p class="specs">({renderDetails.reviews} Reviews & Comments)</p>
                                <div class="specs">
                                    <p class="rating">Specifications:</p>
                                    <ul>
                                        <li class="specs">Warranty:{restDetails.warranty}</li>
                                        <li class="specs">Delivery:{restDetails.delivery}</li>
                                        <li class="specs">Bank Offer:{restDetails.bank_offer}</li>
                                    </ul>
                                    <p class="rating">Price: {restDetails.price}Rs</p>
                                    <Link className="btn btn-danger"
                                        to={`/listing/${p_id}`}>Back</Link>
                                    <button class="btn-detail" onClick={proceed}>Proceed</button>
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



