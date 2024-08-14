import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ListingProduct.css';
import ListingPDisplay from './ListingPDisplay';
import axios from 'axios';

const base_url = "http://127.0.0.1:9001";

const ListingPLogic = () => {
    let params = useParams();
    const [restList1, setRestList1] = useState([]);
    let P_id = params.p_id;


    useEffect(() => {
        // sessionStorage.setItem('category_id', category_id);
        axios.get(`${base_url}/ProductDesc?${P_id}`)
            .then((res) => {
                console.log('API Response:', res.data);
                setRestList1(res.data);
            })
            .catch((error) => {
                console.log('API Error:', error);
            });
    }, [P_id])

    console.log('restList1:', restList1);
    return (

        <>



            <ListingPDisplay listData2={restList1} />



        </>
    )





}
export default ListingPLogic;