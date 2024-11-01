import React, { useState, useEffect } from 'react';
// import './ShowcaseMid.css';
import QuickSearch1 from './HomeProductList/QuickSearch1';
import QuickSearch2 from './HomeProductList/QuickSearch2';
import QuickSearch3 from './HomeProductList/QuickSearch3';

const ShowcaseMid = () => {
    const [couponVisible, setCouponVisible] = useState(true);

    // Function to close the coupon
    const closeCoupon = () => {
        setCouponVisible(false);
    };


    useEffect(() => {
        const body = document.body;
        const coupon = document.getElementById('coupon');

        // if (couponVisible) {
        //     body.classList.add('blur-background');
        //     if (coupon) {
        //         coupon.classList.add('unblur');
        //     }
        // } else {
        //     body.classList.remove('blur-background');
        //     if (coupon) {
        //         coupon.classList.remove('unblur');
        //     }
        // }


        return () => {
            body.classList.remove('blur-background');
            if (coupon) {
                coupon.classList.remove('unblur');
            }
        };
    }, [couponVisible]);

    return (
        <div className="showcase-mid height_so">
            <div className='box-wrapp'>
                <div className='box-wrappp'>
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">
                        {couponVisible && (
                            <div id="coupon">
                                <div>
                                    <button className="coicon" onClick={closeCoupon}>
                                        &times;
                                    </button>
                                </div>
                                <div className="cobox">
                                    <div className="cobox-1">
                                        <img src="https://i.ibb.co/9qmqpbt/Uber.jpg" alt="Uber_logo" border="0" />
                                        <p className="center">20% off on all the sides within the city By using HDFC bank</p>
                                        <div className="cobutton">
                                            <button className="btn-co-1">StealDeal</button>
                                            <button className="btn-co-2">Copy Code</button>
                                        </div>
                                        <p className="font-sl">Valid till 20 Dec,2023</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        </div>

                        <div className="carousel-inner">

                        </div>


                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>

                    <QuickSearch1 />
                    <QuickSearch2 />
                    <QuickSearch3 />
                </div>
            </div>
        </div>
    );
};

export default ShowcaseMid;
