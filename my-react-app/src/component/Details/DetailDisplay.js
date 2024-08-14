import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './detail.css';
import Header from '../Header'; // Ensure Header is imported if needed

const base_url = "http://127.0.0.1:9002";

const DetailDisplay = () => {
    let navigate = useNavigate();
    let [restDetails, setRestDetails] = useState(null);
    let [error, setError] = useState(null); // Added error state
    let params = useParams();
    let ProductSpec_id = params.productSpec_id; // Use ProductSpec_id consistently

    const fetchRestDetails = async () => {
        try {
            const response = await axios.get(`${base_url}/details/${ProductSpec_id}`);
            setRestDetails(response.data[0]);
            setError(null); // Clear previous errors if data is fetched successfully
        } catch (error) {
            setError('Failed to fetch details. Please try again later.'); // Set error message
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchRestDetails();
    }, [ProductSpec_id]); // Use ProductSpec_id

    const proceed = () => {
        if (restDetails) {
            navigate(`/placeOrder/${restDetails.name}`);
        }
    };

    const renderDetails = () => {
        if (error) {
            return <p>{error}</p>; // Display error message if there's an error
        }
        if (restDetails) {
            return (
                <div className="detail">
                    {/* Include Header if needed */}
                    <div className="detail_1">
                        <div className="div_img">
                            <img src={restDetails.img} alt="Food Image" />
                        </div>
                    </div>
                    <div className="detail_2">
                        <div className="detail_22">
                            <h2>{restDetails.name}</h2>
                            <p className="rating">Rating: {restDetails.rating}</p>
                            <p className="specs">({restDetails.reviews} Reviews & Comments)</p>
                            <div className="specs">
                                <p className="rating">Specifications:</p>
                                <ul>
                                    <li className="specs">Warranty: {restDetails.warranty}</li>
                                    <li className="specs">Delivery: {restDetails.delivery}</li>
                                    <li className="specs">Bank Offer: {restDetails.bank_offer}</li>
                                </ul>
                                <p className="rating">Price: {restDetails.price} Rs</p>
                                <Link className="btn btn-danger" to={`/listing/${ProductSpec_id}`}>Back</Link>
                                <button className="btn-detail" onClick={proceed}>Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return <p>Loading...</p>; // Handle loading state or fallback
    };

    return (
        <>
            {renderDetails()}
        </>
    );
};

export default DetailDisplay;
