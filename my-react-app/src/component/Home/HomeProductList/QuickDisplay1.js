import React from 'react';
import { Link } from 'react-router-dom';

const QuickDisplay1 = (props) => {
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
            <div className="box-2">
                <h2>Best of Electronics</h2>
                <div className="s-1">
                    <button className="btn">
                        <a href="#">View all</a>
                    </button>
                    <div className="image">
                        <img src="https://i.ibb.co/TmY7GyF/Animated-1.jpg" alt="Promotional Banner" border="0" />
                    </div>
                </div>
            </div>
            {listProducts(props)}
        </div>
    );
};

export default QuickDisplay1;
