import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Listing.css';
import axios from 'axios';
import CostFilter from '../filters/costFilter';

const base_url = "http://127.0.0.1:9001";

const Listing = () => {
    let params = useParams();
    const [restList, setRestList] = useState();
    let P_Id = params.p_id;

    useEffect(() => {
        sessionStorage.setItem('p_id', P_Id);

        axios.get(`${base_url}/ProductList11?p_id=${P_Id}`)
            .then((res) => {
                console.log('API Response:', res.data);
                setRestList(res.data);
            })
            .catch((error) => {
                console.log('API Error:', error);
            });
    }, [P_Id]);

    console.log('restList:', restList);

    const setDataPerFilter = (data) => {
        setRestList(data);
    };

    const ListingDisplay = ({ listData }) => {
        const renderData = (data) => {
            if (data) {
                if (data.length > 0) {
                    return data.map((item) => (
                        <Link to={`/details?SpecId=${item.ProductSpec_id}`} key={item.ProductSpec_id}>
                            <div className="section">
                                <div className="sec">
                                    <div className="logo">
                                        <img src={item.img} alt="Food Image" />
                                    </div>
                                    <div className="sec-2">
                                        <h2>AMA Cafe</h2>
                                        <p>{item.name}</p>
                                        <p>Review: {item.reviews}</p>
                                        <p>Rating: {item.rating}</p>
                                        <p>Price: {item.p_price}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ));
                } else {
                    return <h2>No Data Found</h2>;
                }
            } else {
                return (
                    <div>
                        <h2>Loading</h2>
                        <img src="/images/loader.gif" alt="loader" />
                    </div>
                );
            }
        };

        return <div className='cuisine'>{renderData(listData)}</div>;
    };

    return (
        <>
            <div className='row'>
                <div id="mainListing">
                    <ListingDisplay listData={restList} />
                </div>
            </div>
        </>
    );
};

export default Listing;
