import React, { useState, useEffect } from 'react';
import './ShowcaseMid.css';
import QuickDisplay2 from './QuickDisplay3';

const base_url = "http://127.0.0.1:6005";
const QuickSearch3 = () => {

    const [mealType2, setMealType2] = useState();

    useEffect(() => {
        fetch(`${base_url}/ProductList3`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setMealType2(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])

    return (


        <div className="box">

            <QuickDisplay2 mealData2={mealType2} />

        </div>


    )
}
export default QuickSearch3;