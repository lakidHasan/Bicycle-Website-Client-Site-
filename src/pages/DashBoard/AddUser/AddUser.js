import React from 'react';
import { useForm } from "react-hook-form";
import "./AddUser.css";

const AddUser = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="add-user">
            <h2>Add User</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
        <input {...register("email", { required: true, maxLength: 20 })} placeholder="Type Email" />
        
        <input type="submit" />
        </form>
        </div>
    );
};

export default AddUser;