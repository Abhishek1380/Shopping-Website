import React from 'react';
import { Link } from 'react-router-dom';

const ListingDisplay = (props) => {
    const renderData = ({ listData }) => {
        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (



                        <div class="box-1">
                            <div class="brand-img">
                                <img src={item.image} alt="BenQ-7" border="0" />
                            </div>
                            <div class="f">

                                <div class="f-1 center"><Link to={'/details?p_id=${item.p_name}'}></Link> {item.p_name} </div>
                                <div class="f-2 center">{item.price}</div>
                                <div class="f-3 center">{item.company}</div>
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
            <div className="fashion_section_1">
                <h2>Best of Electronics</h2>
                <p>9 Items</p>

            </div>
            {/* <hr /> */}
            <div class="fashion_section_2">
                <div class="fashion_sec_1">
                    {renderData(props)}
                </div>
            </div>
        </>
    );
}



export default ListingDisplay;
