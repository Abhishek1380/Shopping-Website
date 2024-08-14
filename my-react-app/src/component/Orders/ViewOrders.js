import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrders';


const url = "http://localhost:9002/orders";

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