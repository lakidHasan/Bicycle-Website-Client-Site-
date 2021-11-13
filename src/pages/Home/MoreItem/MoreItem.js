import React from 'react';
import {Link} from 'react-router-dom';
import './MoreItem.css';

const MoreItem = ({moreItem}) => {
    const {_id, name, price, discription, img} = moreItem;
    return (
        <div className='moreItem'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5>Price : {price}</h5>
            <p>{discription}</p>
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-success"> Buy Order {name}</button></Link>   
        </div>
    );
};

export default MoreItem;