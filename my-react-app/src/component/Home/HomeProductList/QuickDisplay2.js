import React from 'react';
import { Link } from 'react-router-dom';

const QuickDisplay2 = (props) => {
    const listProducts = ({ productData }) => {
        if (Array.isArray(productData)) {
            return productData.map((item) => {
                return (
                    <Link to={`/ProductList1/${item.p_id}`} key={item._id}>
                        <div className="box-1">
                            <div className="brand-img">
                                <img src={item.image} alt={item.p_name} border="0" />
                            </div>
                            <div className="details">
                                <div className="f-1 center">{item.p_name}</div>
                                <div className="f-2 center">${item.price}</div>
                                <div className="f-3 center">{item.company}</div>
                            </div>
                        </div>
                    </Link>
                );
            });
        } else {
            return null;
        }
    };

    return (
        <div className="box">
            <div class="box-2">
                <h2>Top deals</h2>
                <div class="s-1">
                    <button class="btn">
                        <a href="#">View all</a>
                    </button>
                    <div class="Image">
                        <img src="https://i.ibb.co/WW8QYCL/Animated-2.jpg" alt="Animated-2" border="0" />
                    </div>
                </div>
            </div>
            {listProducts(props)}
        </div>
    );
};

export default QuickDisplay2;
