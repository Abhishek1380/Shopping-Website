import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrders';

const base_url = process.env.REACT_APP_BASE_URL;
const url = `${base_url}/orders`;

const ViewOrders = () => {

    const [orders, setOrder] = useState();


    useEffect(() => {
        axios.get(url).then((res) => { setOrder(res.data) })
    })

    return (
        <>

            <DisplayOrder orderData={orders} />
        </>

    )

}

export default ViewOrders;