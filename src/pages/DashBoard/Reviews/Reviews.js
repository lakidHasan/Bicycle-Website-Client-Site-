import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./Reviews.css";

const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://rocky-mountain-96539.herokuapp.com/reviews',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Your Review Done! Thank You');
                reset();
            }
        })
    };
    return (
        <div className="add-review">
            <h2>Review Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
        <textarea {...register("Comment")} placeholder="Type Your Comment"/>
        <input type="submit" />
        </form>
        </div>
    );
};

export default Reviews;