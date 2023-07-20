import React from 'react';
import { Link } from 'react-router-dom';

const ListingPDisplay = (props) => {
    const renderData1 = ({ listData2 }) => {
        if (listData2) {
            if (listData2.length > 0) {
                return listData2.map((item) => {
                    return (

                        <>

                            <div className='item' key={item._id}>
                                <div className='row'>
                                    <div className='col-md-5'>
                                        <img src={item.image} alt='no'
                                            className='Image' />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='hotel_name'>
                                            {/* <Link to={`/Listing_page/${item.p_id}`} > </Link > */}
                                        </div>
                                        <div className='city_name'>"yess"</div>
                                        <div className='city_name'>"yess"</div>
                                        <div className='city_name'>"yess"</div>

                                    </div>
                                </div>

                            </div>

                        </>
                    );


                })
            } else {
                return (
                    <h2>No Data Found</h2>
                )
            }
        }
    }


    return (
        <>
            <div id="content">
                {renderData1(props)}
            </div>


        </>
    );




}
export default ListingPDisplay;