import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './Listing.css';
import ListingDisplay from './ListingDisplay'
import axios from 'axios';

const base_url = "http://127.0.0.1:6003";

const ListingLogic = () => {

    let params = useParams();
    const [restList, setRestList] = useState();

    useEffect(() => {
        let categoryId = params.category_id;
        sessionStorage.setItem('category_id', categoryId);

        axios.get(`${base_url}/products_list_1?category_id=${categoryId}`)
            .then((res) => {
                setRestList(res.data);
            })
    }, [])


    return (
        <>

            {/* <div class="fashion_section_1">
                <h2>Best of Electronics</h2>
                <p>9 Items</p>
                <button class="	fa fa-moon-o" onclick="changeMode()"></button>
            </div>

            <hr /> */}
            <ListingDisplay listData={restList} />
        </>
    )
}
export default ListingLogic;