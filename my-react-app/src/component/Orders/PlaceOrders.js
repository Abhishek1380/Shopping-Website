import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header';
import './PlaceOrders.css';

const url = "http://localhost:9002/PlaceOrders";

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
        e.preventDefault(); // Prevent form submission default behavior
        console.log('Placing order with values:', values);
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => {
                console.log('Fetch response:', response);
                return response.text();  // Read the response as text first
            })
            .then((text) => {
                console.log('Response text:', text);
                if (text) {
                    return JSON.parse(text);  // Parse JSON only if the response text isn't empty
                } else {
                    throw new Error("Received an empty response from the server");
                }
            })
            .then((data) => {
                console.log('Parsed JSON response:', data);
                navigate(`/ViewOrders`);
            })
            .catch((error) => {
                console.error('Error placing order:', error);
                alert(`There was an issue placing your order: ${error.message}`);
            });

    };

    return (
        <div className="containerForm">
            <div className="contain1">
                <h2>Place Your Order</h2>
                <form onSubmit={checkout}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            onChange={handleInputChange}
                            value={values.name}
                            style={{ fontFamily: 'Arial, sans-serif' }}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Mobile Number"
                            required
                            onChange={handleInputChange}
                            value={values.phone}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={handleInputChange}
                            value={values.email}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="cost"
                            name="cost"
                            placeholder="Product Cost"
                            required
                            readOnly
                            value={values.cost}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="product"
                            name="product"
                            readOnly
                            required
                            value={values.product}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Address"
                            required
                            onChange={handleInputChange}
                            value={values.address}
                        />
                    </div>
                    <button className="submit" type="submit">Place Order</button>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrders;
