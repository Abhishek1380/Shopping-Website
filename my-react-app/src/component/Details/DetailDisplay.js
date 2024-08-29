import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './detail.css';
import Header from '../Header'; // Ensure Header is imported if needed

const base_url = "http://127.0.0.1:9002";

const DetailDisplay = () => {
    let navigate = useNavigate();
    let [restDetails, setRestDetails] = useState(null);
    let [error, setError] = useState(null);
    let params = useParams();
    let ProductSpec_id = params.productSpec_id;

    const fetchRestDetails = async () => {
        try {
            const response = await axios.get(`${base_url}/details/${ProductSpec_id}`);
            setRestDetails(response.data[0]);
            setError(null);
        } catch (error) {
            setError('Failed to fetch details. Please try again later.');
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchRestDetails();
    }, [ProductSpec_id]);

    const proceed = () => {
        if (restDetails) {
            navigate(`/placeOrder/${restDetails.name}`);
        }
    };

    if (error) {
        return <p>{error}</p>;
    }

    if (!restDetails) {
        return <p>Loading...</p>;
    }

    return (
        <>
            {/* Include Header if needed */}
            <div className="card detail-card">
                <div className="card-body">
                    <div className="detail-card__container">
                        <div className="detail-card__image">
                            <img src={restDetails.img} alt={restDetails.name} />
                        </div>
                        <div className="detail-card__content">
                            <h1 className="detail-card__title">{restDetails.name}</h1>
                            <p className="detail-card__rating">Rating: {restDetails.rating} ⭐</p>
                            <p className="detail-card__reviews">({restDetails.reviews} Reviews & Comments)</p>
                            <div className="detail-card__specs">
                                <h2>Specifications:</h2>
                                <ul>
                                    <li>Warranty: {restDetails.warranty}</li>
                                    <li>Delivery: {restDetails.delivery}</li>
                                    <li>Bank Offer: {restDetails.bank_offer || 'NA'}</li>
                                </ul>
                                <p className="detail-card__price">Price: ₹{restDetails.p_price}</p>
                            </div>
                            <div className="detail-card__actions">
                                <Link className="btn btn-primary" to={`/listing/${ProductSpec_id}`}>Back</Link>
                                <button className="btn btn-danger" onClick={proceed}>Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailDisplay;
