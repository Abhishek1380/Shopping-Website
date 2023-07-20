import React, { useState, useEffect } from 'react';
import './ShowcaseMid.css';
import QuickDisplay2 from './QuickDisplay2';

const base_url = "http://127.0.0.1:6005";
const QuickSearch2 = () => {

    const [mealType1, setMealType1] = useState();

    useEffect(() => {
        fetch(`${base_url}/ProductList2`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setMealType1(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])

    return (


        <div className="box">

            <QuickDisplay2 mealData1={mealType1} />

        </div>


    )
}
export default QuickSearch2;