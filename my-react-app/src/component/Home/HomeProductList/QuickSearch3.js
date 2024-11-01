import React, { useState, useEffect } from 'react';
import './ShowcaseMid.css';
import QuickDisplay3 from './QuickDisplay3';

const base_url = process.env.REACT_APP_BASE_URL;

const QuickSearch3 = () => {
    const [productData, setProductData] = useState();

    useEffect(() => {
        fetch(`${base_url}/ProductList3`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setProductData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <QuickDisplay3 productData={productData} />
    );
};

export default QuickSearch3;
