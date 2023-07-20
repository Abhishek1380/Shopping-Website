import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './Listing.css';
import ListingDisplay from './ListingDisplay'
import axios from 'axios';
import CostFilter from '../filters/costFilter';

const base_url = "http://127.0.0.1:9001";

const ListingLogic = () => {

    let params = useParams();
    const [restList, setRestList] = useState();
    let P_Id = params.p_id;

    useEffect(() => {

        sessionStorage.setItem('p_id', P_Id);

        axios.get(`${base_url}/ProductList?p_id=${P_Id}`)

            .then((res) => {
                console.log('API Response:', res.data);
                setRestList(res.data);
            })
            .catch((error) => {
                console.log('API Error:', error);
            });
    }, [P_Id])

    console.log('restList:', restList);

    const setDataPerFilter = (data) => {
        setRestList(data)
    }

    return (
        <>
            {/* <div className='row'>
                <div id="mainListing">
                   <div id="filter">
                        <CostFilter p_id={P_Id}
                            restPerCost={(data) => { setDataPerFilter(data) }} />
                    </div> 
                    <ListingDisplay listData={restList} />
                </div>
            </div> */}
            <ListingDisplay listData={restList} />

        </>
    )
}
export default ListingLogic;