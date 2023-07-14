import React from 'react';
import './ShowcaseMid.css';
import './script';

const ShowcaseMid = () => {
    // const couponStyle = {
    //     color: 'red',
    // };

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
        <div className="showcase-mid">
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
                        <div className="f-1 center">Designer Cases & Covers</div>
                        <div className="f-2 center">Just $14</div>
                        <div className="f-3 center">For Top Models</div>
                    </div>
                </div>
                {/* <div className="box-1">
          <div className="brand-img">
            <img src="https://i.ibb.co/C9Dzt6R/Brand-1.webp" alt="Brand-1" border="0" />
          </div>
          <div className="f">
            <div className="f-1 center">Designer Cases & Covers</div>
            <div className="f-2 center">Just $14</div>
            <div className="f-3 center">For Top Models</div>
          </div>
        </div> */}
                <div className="box-1">
                    <div className="brand-img">
                        <img src="https://i.ibb.co/YtjXhmq/Brand-2.webp" alt="Brand-2" border="0" />
                    </div>
                    <div className="f">
                        <div className="f-1 center">Top Mirrorless Cameras </div>
                        <div className="f-2 center">Shop Now!</div>
                        <div className="f-3 center">Canon,Sony,Fujifilm...</div>
                    </div>
                </div>
                <div className="box-1">
                    <div className="brand-img">
                        <img src="https://i.ibb.co/BVsBqxh/Brand-3.webp" alt="Brand-3" border="0" />
                    </div>
                    <div className="f">
                        <div className="f-1 center">Premium Powerbanks</div>
                        <div className="f-2 center">Shop Now!</div>
                        <div className="f-3 center">Mi,Realme & more</div>
                    </div>
                </div>
                {/* <div className="box-1">
          <div className="brand-img">
            <img src="https://i.ibb.co/BVsBqxh/Brand-3.webp" alt="Brand-3" border="0" />
          </div>
          <div className="f">
            <div className="f-1 center">Premium Powerbanks</div>
            <div className="f-2 center">Shop Now!</div>
            <div className="f-3 center">Mi,Realme & more</div>
          </div>
        </div> */}
                <div className="box-1">
                    <div className="brand-img">
                        <img src="https://i.ibb.co/qDKx05B/Brand-4.webp" alt="Brand-4" border="0" />
                    </div>
                    <div className="f">
                        <div className="f-1 center">Plain Cases & Covers</div>
                        <div className="f-2 center">Under $14</div>
                        <div className="f-3 center">For All Top Models</div>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="box-2">
                    <h2>Top deals</h2>
                    <div className="s-1">
                        <button className="btn">
                            <a href="#">View all</a>
                        </button>
                        <div className="Image">
                            <img src="https://i.ibb.co/WW8QYCL/Animated-2.jpg" alt="Animated-2" border="0" />
                        </div>
                    </div>
                </div>
                <div className="box-1">
                    <div className="brand-img">
                        <img src="https://i.ibb.co/Zd710ZV/Img-1.webp" alt="Img-1" border="0" />
                    </div>
                    <div className="f">
                        <div className="f-1 center">Food Spreads</div>
                        <div className="f-2 center">Upto 75% Off</div>
                        <div className="f-3 center">Myfiness,Alpino & More</div>
                    </div>
                </div>
                {/* <div className="box-1">
          <div className="brand-img">
            <img src="https://i.ibb.co/Zd710ZV/Img-1.webp" alt="Img-1" border="0" />
          </div>
          <div className="f">
            <div className="f-1 center">Food Spreads</div>
            <div className="f-2 center">Upto 75% Off</div>
            <div className="f-3 center">Myfiness,Alpino & More</div>
          </div>
        </div> */}
                <div className="box-1">
                    <div className="brand-img">
                        <img src="https://i.ibb.co/Ttwxhnq/Img-2.webp" alt="Img-2" border="0" />
                    </div>
                    <div className="f">
                        <div className="f-1 center">Ab Exerciser </div>
                        <div className="f-2 center">From $20</div>
                        <div className="f-3 center">Adrenex,Manogyam & More</div>
                    </div>
                </div>
                <div className="box-1">
                    <div className="brand-img">
                        <img src="https://i.ibb.co/QK2WDZV/Img-3.webp" alt="Img-3" border="0" />
                    </div>
                    <div className="f">
                        <div className="f-1 center">Baby Bathing Accessories</div>
                        <div className="f-2 center">under $25</div>
                        <div className="f-3 center">Baby Bath Tubs & More</div>
                    </div>
                </div>
                <div className="box-1">
                    <div className="brand-img">
                        <img src="https://i.ibb.co/mbJKGV5/Img-4.webp" alt="Img-4" border="0" />
                    </div>
                    <div className="f">
                        <div className="f-1 center center">Car Lubricant</div>
                        <div className="f-2 center">Upto 45% Off</div>
                        <div className="f-3 center">Mobil,Shell,Castrol & More</div>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="box-2">
                    <h2>Pick your style</h2>
                    <div className="s-1">
                        <button className="btn">
                            <a href="#">View all</a>
                        </button>
                        <div className="Image">
                            <img src="https://i.ibb.co/Rb78v8G/Animated-3.jpg" alt="Animated-3" border="0" />
                        </div>
                    </div>
                </div>
                <div className="box-1">
                    <div className="brand-img">
                        <img src="https://i.ibb.co/xjkffQZ/part-2.webp" alt="part-2" border="0" />
                    </div>
                    <div className="f">
                        <div className="f-1 center">Watches</div>
                        <div className="f-2 center">From $25</div>
                        <div className="f-3 center">Best Selling</div>
                    </div>
                </div>
                <div className="box-1">
                    <div className="brand-img">
                        <img src="https://i.ibb.co/R4PnXXc/part-11.webp" alt="part-11" border="0" />
                    </div>
                    <div className="f">
                        <div className="f-1 center">U.S. Polo Assn.,Highlander.. </div>
                        <div className="f-2 center">Min. 40% Off</div>
                        <div className="f-3 center">Sneakers,Loafers,Slides...</div>
                    </div>
                </div>
                <div className="box-1">
                    <div className="brand-img">
                        <img src="https://i.ibb.co/qmtL6Jm/part-111.webp" alt="part-111" border="0" />
                    </div>
                    <div className="f">
                        <div className="f-1 center">Sweatshirts,Hoodies,Jackets...</div>
                        <div className="f-2 center">from $24</div>
                        <div className="f-3 center">Wildcraft,Fort Collins...</div>
                    </div>
                </div>
                {/* <div className="box-1">
          <div className="brand-img">
            <img src="https://i.ibb.co/qmtL6Jm/part-111.webp" alt="part-111" border="0">
          </div>
          <div className="f">
            <div className="f-1 center">Sweatshirts,Hoodies,Jackets...</div>
            <div className="f-2 center">from $24</div>
            <div className="f-3 center">Wildcraft,Fort Collins...</div>
          </div>
        </div> */}
                <div className="box-1">
                    <div className="brand-img">
                        <img src="https://i.ibb.co/16VXSyw/part-1111.webp" alt="part-1111" border="0" />
                    </div>
                    <div className="f">
                        <div className="f-1 center center">Bags.Trolleys,Luggage...</div>
                        <div className="f-2 center">50-70%+Extra 10% Off</div>
                        <div className="f-3 center">Wildcraft,Americsn Tourister...</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowcaseMid;
