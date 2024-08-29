import React, { useState, useEffect } from 'react';
import './ShowcaseMid.css';
import QuickDisplay2 from './QuickDisplay2';

const base_url = process.env.REACT_APP_BASE_URL;
const QuickSearch1 = () => {

    const [mealType, setMealType] = useState();

    useEffect(() => {
        fetch(`${base_url}/ProductList2`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setMealType(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])

    return (




        <QuickDisplay2 mealData={mealType} />




    )
}
export default QuickSearch1;