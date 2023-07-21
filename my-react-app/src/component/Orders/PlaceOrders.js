import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header';
import './PlaceOrders.css';

const url = "http://localhost:6005/PlaceOrders";

const PlaceOrders = () => {
    let params = useParams();
    let navigate = useNavigate();

    // let sessionData = sessionStorage.getItem('userInfo');
    // let data = JSON.parse(sessionData);

    const initialValues = {
        id: Math.floor(Math.random() * 100000),
        name: '',
        email: '',
        product: params.product_name,
        cost: Math.floor(Math.random() * 1000),
        phone: '',
        address: "Hno 12 Sec 34",
    };
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const checkout = () => {
        console.log(values);
        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(() => navigate(`/JustOrder`));
    };

    return (
        <>
            <div className="containerForm">
                <div className="contain1">
                    <h2>Place Your Order</h2>
                    <form>
                        <div className="form-group">
                            <input type="text" id="name" name="name" style={{ fontFamily: 'Arial, sans-serif' }} placeholder="Name" required onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input type="tel" id="mobile" name="mobile" placeholder="Mobile Number" required onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Email" required onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" id="cost" name="cost" placeholder="Product Cost" required onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" id="product" name="product" placeholder={params.product_name} required onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" id="address" name="address" placeholder="Address" required onChange={handleInputChange} />
                        </div>
                        <button className="submit" type="submit" onClick={checkout}>Place Order</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PlaceOrders;
