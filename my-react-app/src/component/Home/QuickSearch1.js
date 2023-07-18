import React, { useState, useEffect } from 'react';
import './QD1.css';
import QuickDisplay1 from './QuickDisplay1';

const base_url = "http://127.0.0.1:6005";
const QuickSearch1 = () => {

    const [mealType, setMealType] = useState();

    useEffect(() => {
        fetch(`${base_url}/products_list_1`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setMealType(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])

    return (


        <div className="box">

            <QuickDisplay1 mealData={mealType} />

        </div>


    )
}
export default QuickSearch1;