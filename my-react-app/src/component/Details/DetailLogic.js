import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';
import DetailDisplay from './DetailDisplay';
import axios from 'axios';

const base_url = "http://127.0.0.1:9002";

const DetailLogic = () => {
    let params = useParams();
    const [restDetails, setRestDetails] = useState(null); // Initialize as null
    let ProductSpec_id = params.productSpec_id;

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`${base_url}/details/${ProductSpec_id}`);
                setRestDetails(response.data[0]);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDetails();
    }, [ProductSpec_id]); // Add productSpec_id as a dependency

    return (
        <>
            <DetailDisplay listData1={restDetails} />
        </>
    );
};

export default DetailLogic;
