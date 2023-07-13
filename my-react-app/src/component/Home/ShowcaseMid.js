import React from 'react';
import './ShowcaseMid.css';

const ShowcaseMid = () => {
    const couponStyle = {
        color: 'red',
    };

    const carouselItemStyle = {
        width: '100%',
    };

    return (
        <>
            <div className="showcase-mid">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    <div id="coupon">
                        <div>
                            <button className="coicon" onClick={closeCoupon}>&times;</button>
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

                    {/* Indicators/dots */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.ibb.co/cDFxsnR/Flip-1.webp" alt="Los Angeles" className="d-block" style={carouselItemStyle} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/DYZ0Fgv/Flip-5.webp" alt="Chicago" className="d-block" style={carouselItemStyle} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/9nRHr9y/Flip-4.webp" alt="New York" className="d-block" style={carouselItemStyle} />
                        </div>
                    </div>

                    {/* Left and right controls/icons */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>

                <div className="box">
                    <div className="box-2">
                        <h2>Best of Electronics</h2>
                        <div className="s-1">
                            <button className="btn">
                                <a href="#">View all</a>
                            </button>
                            <div className="Image">
                                <img src="https://i.ibb.co/TmY7GyF/Animated-1.jpg" alt="Animated-1" border="0" />
                            </div>
                        </div>
                    </div>
                    <div className="box-1">
                        <div className="brand-img">
                            <img src="https://i.ibb.co/C9Dzt6R/Brand-1.webp" alt="Brand-1" border="0" />
                        </div>
                        <div className="f">
                            <div className="f-1 center">Designer Cases &amp; Covers</div>
                            <div className="f-2 center">Just $14</div>
                            <div className="f-3 center">For Top Models</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowcaseMid;
