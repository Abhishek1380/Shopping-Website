import React from 'react';
import { Link } from 'react-router-dom';

const ListingDisplay = (props) => {
    const renderData = ({ listData }) => {
        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (



                        <div className="box-1" key={item._id}   >

                            <div className="brand-img">
                                <img src={item.image} alt="BenQ-7" border="0" />
                            </div>
                            <div className="f">
                                <div className="f-1 center">
                                    <Link to={`/ListingProducts/${item.p_id}`}>{item.p_name}</Link>

                                </div>
                                <div className="f-2 center">{item.price}</div>
                                <div className="f-3 center">{item.company}</div>
                            </div>
                        </div>





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
            <>


                <div class="fashion_section_2">
                    <div class="fashion_sec_1">
                        {renderData(props)}
                    </div>
                </div>
            </>
        );
    }
}


export default ListingDisplay;
