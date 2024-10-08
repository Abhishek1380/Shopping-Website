import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import Header from '../Header';
import './PlaceOrders.css';

const base_url = process.env.REACT_APP_BASE_URL;
const url = `${base_url}/PlaceOrders`;


const PlaceOrders = () => {
    let params = useParams();
    let navigate = useNavigate();

    const initialValues = {
        id: Math.floor(Math.random() * 100000),
        name: '',
        email: '',
        product: params.product_name,
        cost: Math.floor(Math.random() * 1000),
        phone: '',
        address: '',
    };
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const checkout = (e) => {
        e.preventDefault();
        console.log('Placing order with values:', values);
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.text())
            .then((text) => {
                if (text) {
                    return JSON.parse(text);
                } else {
                    throw new Error("Received an empty response from the server");
                }
            })
            .then((data) => {
                navigate(`/ViewOrders`);
            })
            .catch((error) => {
                console.error('Error placing order:', error);
                alert(`There was an issue placing your order: ${error.message}`);
            });
    };

    return (
        <div className="containerForm">

            <div className="form-container">
                <h2>Place Your Order</h2>
                <form onSubmit={checkout} className="order-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                            onChange={handleInputChange}
                            value={values.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Mobile Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your mobile number"
                            required
                            onChange={handleInputChange}
                            value={values.phone}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            onChange={handleInputChange}
                            value={values.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cost">Product Cost</label>
                        <input
                            type="text"
                            id="cost"
                            name="cost"
                            placeholder="Product Cost"
                            required
                            readOnly
                            value={values.cost}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="product">Product</label>
                        <input
                            type="text"
                            id="product"
                            name="product"
                            readOnly
                            required
                            value={values.product}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            placeholder="Enter your address"
                            required
                            onChange={handleInputChange}
                            value={values.address}
                        />
                    </div>
                    <button className="submit-btn" type="submit">Place Order</button>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrders;
