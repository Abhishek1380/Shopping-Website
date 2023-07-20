import React from 'react';
import { Link } from 'react-router-dom';

const ListingDisplay = (props) => {
    const renderData = ({ listData }) => {
        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (




                        <Link to={`/Listing_page/${item.ProductSpec_id}`} >
                            < div className="section" key={item._id}>
                                <div className="sec">
                                    <div className="logo">
                                        <img src={item.image} alt="Food Image" />
                                    </div>
                                    <div className="sec-2">
                                        <h2>AMA Cafe</h2>
                                        <p>BenQ EW 23.8 inch Full HD LED Backlit IPS Panel Built-in Speakers, Blue Light Filter, Wall Mountable, Tilt Adjustment, Flicker-Free Monitor (EW2480)</p>
                                        <p>Review: Average</p>
                                        <p>Price: Rs.450</p>
                                        <p>Ratings: 345</p>
                                    </div>
                                </div>
                            </div>
                        </Link >




                    )
                })
            } else {
                return (
                    <h2>No Data Found</h2>
                )
            }
            // } else {
            //     return (
            //         <div>
            //             <h2>Loading</h2>
            //             <img src="/images/loader.gif" alt="loader" />
            //         </div>
            //     )
            // }
        }

        return (



            <div className='cuisine'>
                {renderData(props)}
            </div>


        );
    }
}


export default ListingDisplay;
