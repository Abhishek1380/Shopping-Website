import React from 'react';
import './ShowcaseMid.css';
import './script';
import QuickSearch1 from './QuickSearch1';
import QuickSearch2 from './QuickSearch2';
import QuickSearch3 from './QuickSearch3';

const ShowcaseMid = () => {


    const closeCoupon = () => {
        // window.onload = loadCoupon();
        // function loadCoupon() {
        //     document.getElementById('coupon').style.visibility = 'visible';
        //     document.getElementById('main').style.opacity = '0.7'
        // }

        // function closeCoupon() {
        //     document.getElementById('coupon').style.visibility = 'hidden';
        //     document.getElementById('main').style.opacity = '1'
        // }
    };

    return (
        <div className="showcase-mid height_so ">
            <div className='box-wrapp'>
                <div className='box-wrappp'>
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">
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

                        {/* Indicators/dots */}
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://i.ibb.co/cDFxsnR/Flip-1.webp" alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ibb.co/DYZ0Fgv/Flip-5.webp" alt="Chicago" className="d-block" style={{ width: '100%' }} />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ibb.co/9nRHr9y/Flip-4.webp" alt="New York" className="d-block" style={{ width: '100%' }} />
                            </div>
                            {/* <div className="carousel-item">
            <img src="Img/Flip-4.webp" alt="New York" className="d-block" style="width:100%">
          </div>
          <div className="carousel-item">
            <img src="Img/Flip-5.webp" alt="New York" className="d-block" style="width:100%">
          </div> */}
                        </div>

                        {/* Left and right controls/icons */}
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
