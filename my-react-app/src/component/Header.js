import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import Button from './UI/Button.jsx';
// import CartContext from '../store/CartContext.jsx';
// import UserProgressContext from './UI/UserProgressContext.js';

const base_url = process.env.REACT_APP_BASE_URL;

const Header = () => {
    // const cartCtx = useContext(CartContext);
    // const userProgressCtx = useContext(UserProgressContext);

    // const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    //     return totalNumberOfItems + item.quantity;
    // }, 0);

    // function handleShowCart() {
    //     userProgressCtx.showCart();
    // }

    // const [location, setLocation] = useState([]);

    // useEffect(() => {
    //     fetch(`${base_url}/location`, { method: 'GET' })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setLocation(data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    // const renderItem = (data) => {
    //     if (data.length > 0) {
    //         return data.map((item) => (
    //             <option key={item.id} value={item.state_id}>
    //                 {item.state}
    //             </option>
    //         ));
    //     }
    //     return null;
    // };

    return (
        <header className="Navbar">
            <div className="Nav">
                <div className="Nav-1">
                    <div className="Nav-1-1">
                        <Link to="/">
                            <img src="https://i.ibb.co/G371csj/SubFile.png" alt="SubFile" />
                        </Link>
                        <h6>Explore<span>Plus+</span></h6>
                    </div>
                </div>
                <div className="Nav-2">
                    <div className="search-input">
                        <button className="fa fa-search"></button>
                        <input type="text" placeholder="Search for products, brands and more" />
                    </div>
                </div>
                <div className="Nav-3">
                    <div>
                        <div className="links">
                            <Link to="/" className="fa fa-home icon-margin visible"></Link>
                            <Link to="/">Home</Link>
                        </div>
                    </div>
                    <div>
                        <div className="links">
                            <Link to="/seller" className="fa fa-user-o icon-margin visible"></Link>
                            <Link to="/seller">Seller</Link>
                        </div>
                    </div>
                    <div>
                        <div className="links">
                            <Link to="/cart" className="fa fa-shopping-cart icon-margin visible"></Link>
                            {/* <Button textOnly onClick={handleShowCart}>Cart({totalCartItems})</Button> */}

                        </div>
                    </div>
                    {/* <div>
                        <div className="links">
                            <button className="fa fa-ellipsis-v"></button>
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
