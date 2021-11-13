import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddBycicle.css";

const AddBycicle = () => {
    const { register, handleSubmit, reset } = useForm();
     const onSubmit = data => {
        console.log(data);
        axios.post('https://rocky-mountain-96539.herokuapp.com/bycicles', data)
        .then(res => {
            if(res.data.insertedId){
                alert ('added successfully');
                reset();
            }
        })
     }
    return (
        <div className='add-bycicle'>
            <h2>Please Add Bycicle</h2>
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

export default AddBycicle;