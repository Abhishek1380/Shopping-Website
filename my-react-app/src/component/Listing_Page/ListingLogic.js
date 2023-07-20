import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './Listing.css';
import ListingDisplay from './ListingDisplay'
import axios from 'axios';

const base_url = "http://127.0.0.1:6005";

const ListingLogic = () => {

    let params = useParams();
    const [restList, setRestList] = useState();
    let categoryId = params.category_id;

    useEffect(() => {

        sessionStorage.setItem('category_id', categoryId);

        axios.get(`${base_url}/ProductList?category_id=${categoryId}`)
            .then((res) => {
                console.log('API Response:', res.data);
                setRestList(res.data);
            })
            .catch((error) => {
                console.log('API Error:', error);
            });
    }, [categoryId])

    console.log('restList:', restList);

    return (
        <>

            <div class="fashion_section_1">
                <h2>Best of Electronics</h2>
                <p>9 Items</p>
                <button class="	fa fa-moon-o" onclick="changeMode()"></button>
            </div>


            <ListingDisplay listData={restList} />
        </>
    )
}
export default ListingLogic;