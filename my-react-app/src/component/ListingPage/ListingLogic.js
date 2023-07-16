import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './Listing.css';
import ListingDisplay from './ListingDisplay'
import axios from 'axios';

const base_url = "127.0.0.1:6003";

const ListingLogic = () => {

    let params = useParams();
    const [restList, setRestList] = useState();

    useEffect(() => {
        let P_id = params.p_Id;
        axios.get(`${base_url}/resturant?mealtype_id=${P_id}`)
            .then((res) => {
                setRestList(res.data);
            })
    }, [])
    // }, [])

    return (
        <>
            <h1>listing</h1>
            <>listing</>
        </>
    )
}
export default ListingLogic;