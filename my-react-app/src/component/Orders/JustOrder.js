import React, { useState, useEffect } from 'react';
import axios from 'axios';

const base_url = process.env.REACT_APP_BASE_URL;
const url = `${base_url}/orders`;

const JustOrder = () => {
    const [orders, setOrder] = useState();

    useEffect(() => {
        axios.get(url).then((res) => {
            setOrder(res.data);
        });
    }, []);

    const renderData = (orderData) => {
        if (orderData) {
            return orderData.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.product}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>Rs. {item.cost}</td>
                    <td>{item.phone}</td>
                </tr>
            ));
        }
    };

    return (
        <>
            <div className="container">
                <center><h3>Orders</h3></center>
                <table className="table">
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Cost</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData(orders)}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default JustOrder;
