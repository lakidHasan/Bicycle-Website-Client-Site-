import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Booking.css';
import useAuth from '../../../Hooks/useAuth';



const Booking = () => {
    const {user} = useAuth();
    
    const[bookingInfo, setBookingInfo] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        const order = {
            ...bookingInfo,
        }
        // sent to server 
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert("Order Submit Done")
            reset();
        })
    };
    const {serviceId} =useParams();
    
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/bycicles')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    const users = details?.find(use => use.id = serviceId);
    

    return (
        <div className="booking">
           <div className="offer-details"><img src={users?.img} alt="" />
           <h3>{users?.name}</h3>
           <h5>Price: {users?.price}</h5></div>
           <div className="order">
           <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })}  onBlur={handleOnBlur} placeholder= {user.displayName} />
            <input {...register("email", { required: true, maxLength: 20 })}  onBlur={handleOnBlur} placeholder={user.email} />
            <textarea style={{width:"80%", marginBottom:"30px"}} {...register("discription")} onBlur={handleOnBlur} placeholder='Address' />
            <input type="number" {...register("price")} onBlur={handleOnBlur} placeholder="Phone Number" />
            {/* <input type="phoneNumber" {...register("price")} onBlur={handleOnBlur} placeholder="Phone Number" /> */}
            <input className="bg-primary" type="submit" />
           </form>
           </div>
        </div>
    );
};

export default Booking;