import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './Listing.css';
import ListingDisplay from './ListingDisplay';
import axios from 'axios';


import Button from '../UI/Button.jsx';
import CartContext from '../../store/CartContext.jsx';



const base_url = process.env.REACT_APP_BASE_URL;

const ListingLogic = () => {
    const params = useParams();
    const [restList, setRestList] = useState([]);
    const P_Id = params.p_id;
    const cartCtx = useContext(CartContext);

    useEffect(() => {
        axios.get(`${base_url}/ProductList1/${P_Id}`)
            .then((res) => {
                console.log('API Response:', res.data);
                setRestList(res.data);
            })
            .catch((error) => {
                console.log('API Error:', error);
            });
    }, [P_Id]);

    console.log('restList:', restList);

    function handleAddMealToCart(item) {
        cartCtx.addItem(item);
    }

    return (
        <div className='row'>
            <div id="mainListing">
                <ListingDisplay listData={restList} addToCart={handleAddMealToCart} />
            </div>
        </div>
    );
}

export default ListingLogic;
