import React from 'react';
import './Service.css';
import {Link} from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, price, discription, img} = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{name.toUpperCase()}</h2>
            <h4>Price: {price}</h4>
            <p>{discription}</p>
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-primary"> Buy Order {name}</button></Link>
        </div>
    );
};

export default Service;