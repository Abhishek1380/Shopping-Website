import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button.jsx';
import { currencyFormatter } from '../../Util/formatting.js';
import CartContext from '../../store/CartContext.jsx';

const ListingDisplay = (props) => {
    const { listData } = props;
    const cartCtx = useContext(CartContext);

    if (!listData || listData.length === 0) {
        return <h2>No Data Found</h2>;
    }

    function handleAddMealToCart(item) {
        console.log('Adding item to cart:', item);
        cartCtx.addItem(item);
    }

    return (
        <div className='cuisine'>
            {listData.map((item) => (
                <div className="card custom-card" style={{ width: '20rem' }} key={item._id}>
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
                                <strong>Price:</strong> ₹{currencyFormatter.format(item.price)} <br />
                                <strong>Rating:</strong> {item.rating} ⭐ ({item.reviews} reviews) <br />
                                <strong>Warranty:</strong> {item.warranty} <br />
                                <strong>Delivery:</strong> {item.delivery} <br />
                                <strong>Bank Offer:</strong> {item.bankOffer || 'NA'} <br />
                            </p>
                        </div>
                    </Link>
                    <div className="card-body">
                        <Link to={`/details/${item.productSpec_id}`} className="btn btn-primary" style={{ marginRight: '10px' }}>View Details</Link>
                        <Button onClick={() => handleAddMealToCart(item)}>Add to Cart</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListingDisplay;
