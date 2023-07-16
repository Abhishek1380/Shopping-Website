import React from 'react';
import { Link } from 'react-router-dom';

const DetailDisplay = (props) => {
    const renderData1 = ({ listData1 }) => {
        if (listData1) {
            if (listData1.length > 0) {
                return listData1.map((item) => {
                    return (
                        <div className="detail">
                            <div className="detail_1">
                                <div className="div_img">
                                    <img src="https://i.ibb.co/HnSnTKH/BenQ-7.webp" alt="img" />
                                </div>
                            </div>
                            <div className="detail_2">
                                <div className="detail_22">
                                    <h2>Mi by Xiaomi Beard Trimmer 2 C Trimmer 90 min Runtime 40 Length Settings (Black)</h2>
                                    <p className="rating">Rating: <span>4.7</span></p>
                                    <div className="specs">
                                        <p className="rating">Specifications:</p>
                                        <ul>
                                            <li className="specs">Warranty: 3 Years</li>
                                            <li className="specs">Panel-Type: IPS Panel</li>
                                            <li className="specs">HDMI-Ports: 3</li>
                                            <li className="specs">Battery: 8hrs</li>
                                        </ul>
                                        <p className="rating">Price: 11,200Rs</p>
                                        <button className="btn-detail">Back</button>
                                        <button className="btn-detail">Proceed</button>
                                    </div>
                                </div>
                            </div>
                        </div>






                    )
                })
            } else {
                return (
                    <h2>No Data Found</h2>
                )
            }
        } else {
            return (
                <div>
                    <h2>Loading</h2>
                    <img src="/images/loader.gif" alt="loader" />
                </div>
            )
        }
    }


    return (
        <>


            {renderData1(props)}


        </>
    );
}



export default DetailDisplay;
