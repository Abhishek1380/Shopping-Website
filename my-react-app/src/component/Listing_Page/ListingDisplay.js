import React from 'react';
import { Link } from 'react-router-dom';

const ListingDisplay = (props) => {
    const { listData } = props;

    if (!listData || listData.length === 0) {
        return <h2>No Data Found</h2>;
    }

    return (
        <div className='cuisine'>
            {listData.map((item) => (
                <div className="section" key={item._id}>
                    <Link to={`/details/${item.productSpec_id}`}>
                        <div className="sec">
                            <div className="logo">
                                <img src={item.img} alt="Food Image" />
                            </div>
                            <div className="sec-2">
                                <h2>AMA Cafe</h2>
                                <p>{item.name}</p>
                                <p>Review: {Array.isArray(item.review) && item.review[1] ? item.review[1] : 'No Review'}</p>
                                <p>Rating: {item.rating}</p>
                                <p>Price: {item.p_price}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ListingDisplay;
