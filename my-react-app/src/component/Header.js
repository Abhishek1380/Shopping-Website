import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const base_url = process.env.Base_Url;

const Header = () => {


    const [location, setLocation] = useState('test');
    // const [resData, setResData] = useState('test');

    // useEffect(() => {
    //     fetch(`${base_url}/location`, { method: 'GET' })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setLocation(data);
    //             console.log(location);
    //         })
    // }, [])
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

    const renderItem = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option key={item.id} value={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }
    // const handleCity = (event) => {
    //     console.log(event.target.value);
    //     let state_id = event.target.value;
    //     fetch(`${base_url}/resturant?stateId=${state_id}`, { method: 'GET' })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setResData(data);
    //         })

    // }


    return (
        <>
            <header className="Navbar">
                <div className="Nav">
                    <div className="Nav-1">
                        <div className="Nav-1-1">
                            <a href="#"><img src="https://i.ibb.co/G371csj/SubFile.png" alt="SubFile" border="0" /></a>
                            <h6>Explore<span>Plus+</span></h6>
                        </div>
                    </div>
                    <div className="Nav-2">
                        <div className="search-input">
                            <button className="	fa fa-search"></button>
                            <input type="text " placeholder="Search for products,brands and more" />
                        </div>
                    </div>
                    <div className="Nav-3">
                        <div>
                            <div className="links">
                                <a href="#" class="fa fa-home icon-margin visible"></a>
                                <a href="#"> Home</a>
                            </div>

                        </div>
                        <div>
                            <div className="links">
                                <a href="#" className="fa fa-user-o icon-margin visible"></a>
                                <a href="#">Seller</a>
                            </div>
                        </div>
                        <div>
                            <div className="links">
                                <a href="#" class="fa fa-shopping-cart icon-margin visible"></a>
                                <a href="#">Cart</a>
                            </div>
                        </div>
                        <div>
                            <div className="links">
                                <a href="#" className="fa fa-ellipsis-v"></a>

                            </div>
                            {/* <Link className="btn btn-info" to="/">Home</Link> */}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;