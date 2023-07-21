import React from 'react';
import { Link } from 'react-router-dom';

const ListingDisplay = (props) => {
    const renderData = ({ listData }) => {
        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (




                        <Link to={`/details?SpecId=${item.ProductSpec_id}`} >

                            <div className="section">
                                <div className="sec">
                                    <div className="logo">
                                        <img src={item.image} alt="Food Image" />
                                    </div>
                                    <div className="sec-2">
                                        <h2>AMA Cafe</h2>
                                        <p>
                                            {item.name}
                                        </p>
                                        <p>Review :{item.review}</p>
                                        <p>Rating:{item.rating}</p>
                                        <p>Price{item.p_price}</p>
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
