import React from 'react';
import { Link } from 'react-router-dom';

const QuickDisplay1 = (props) => {
    const listMeal = ({ mealData }) => {

        if (Array.isArray(mealData)) { // Check if mealData is an array
            return mealData.map((item) => {

                return (
                    <Link to={`/ProductList1/${item.p_id}`} >

                        <div className="box-1" key={item._id}>
                            <div className="brand-img">
                                <img src={item.image} alt="Brand-1" border="0" />
                            </div>
                            <div className="f">
                                <div className="f-1 center">{item.p_name}</div>
                                <div className="f-2 center">{item.price}</div>
                                <div className="f-3 center">{item.company}</div>
                            </div>
                        </div>
                    </Link>
                )
            }
            );


        } else {
            return null; // Return null or handle the case when mealData is not an array
        }
    };







    return (

        <div className="box">
            <div className="box-2">
                <h2>Best of Electronics</h2>
                <div className="s-1">
                    <button className="btn">
                        <a href="#">View all</a>
                    </button>
                    <div className="Image">
                        <img src="https://i.ibb.co/TmY7GyF/Animated-1.jpg" alt="Animated-1" border="0" />
                    </div>
                </div>
            </div>
            {listMeal(props)}
        </div>


    )
}

export default QuickDisplay1;

