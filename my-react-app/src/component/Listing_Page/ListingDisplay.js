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
                <div className="card custom-card" style={{ width: '18rem' }} key={item._id}>
                    <Link to={`/details/${item.productSpec_id}`} style={{ textDecoration: 'none' }}>
                        <div className="card-body">
                            <img
                                className="card-img-top"
                                src={item.img}
                                alt={item.name}
                                style={{ objectFit: 'cover', height: '150px' }}
                            />
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">
                                <strong>Price:</strong> ₹{item.p_price} <br />
                                <strong>Rating:</strong> {item.rating} ⭐ ({item.reviews} reviews) <br />
                                <strong>Warranty:</strong> {item.warranty} <br />
                                <strong>Delivery:</strong> {item.delivery} <br />
                                <strong>Bank Offer:</strong> {item.bankOffer || 'NA'} <br />
                            </p>
                            <a href={`/details/${item.productSpec_id}`} className="btn btn-primary">View Details</a>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ListingDisplay;
