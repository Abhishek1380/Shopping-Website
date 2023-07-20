import React, { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom'
import './detail.css';
import DetailDisplay from './DetailDisplay'
import axios from 'axios';
import { Link } from 'react-router-dom';

const base_url = "http://127.0.0.1:6006";

const DetailLogic = () => {

    let params = useParams();
    const [restDetails, setrestDetails] = useState();
    let P_id = params.productSpec_id;

    useEffect(() => {

        axios.get(`${base_url}/details?productSpec_id=${P_id}`)
            .then((res) => {
                setrestDetails(res.data[1]);
                console.log(res.data);
            })

    }, [])
    // }, [])

    return (
        <>

            {/* <div class="fashion_section_1">
                <h2>Best of Electronics</h2>
                <p>9 Items</p>
                <button class="	fa fa-moon-o" onclick="changeMode()"></button>
            </div>

            <hr /> */}
            <DetailDisplay listData1={restDetails} />
        </>
    )
}
export default DetailLogic;