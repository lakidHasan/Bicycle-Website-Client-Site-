import axios from 'axios';
import React from 'react';
import './AddTotal.css';
import { useForm } from "react-hook-form";

const AddTotal = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
       console.log(data);
       axios.post('https://rocky-mountain-96539.herokuapp.com/bycicle2', data)
       .then(res => {
           if(res.data.insertedId){
               alert("Added Done");
               reset();
           }
       })
       }
    return (
        <div className='add-total'>
            <h2>Please Add More Bycicle</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder=" Name" />
            <textarea {...register("discription")} placeholder='Description' />
            <input type="number" {...register("price")} placeholder="Price" />
            <input {...register("img")} placeholder="Image" />
            <input className="bg-primary" type="submit" />
           </form>
        </div>
    );
};

export default AddTotal;