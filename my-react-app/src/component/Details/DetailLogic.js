import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';
import DetailDisplay from './DetailDisplay';
import axios from 'axios';

const base_url = process.env.REACT_APP_BASE_URL;

const DetailLogic = () => {
    let params = useParams();
    const [restDetails, setRestDetails] = useState(null);
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
    }, [ProductSpec_id]);

    return (
        <>
            <DetailDisplay listData1={restDetails} />
        </>
    );
};

export default DetailLogic;
