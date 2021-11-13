import React, { useState } from 'react';
import { Form, Nav, Button, Spinner, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [login, setLogin] = useState({});
    const history = useHistory()
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e =>{
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData = {...login};
       newLoginData[field] = value;
       console.log(newLoginData);
       setLogin(newLoginData);
    }
    const handleLoginSubmit = e => {
        if(login.password !== login.password2){
           alert('try to match your password') 
           return
        }
        registerUser(login.email, login.password , login.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <h1>Register </h1>
            {
               !isLoading && <form onSubmit={handleLoginSubmit}>
                <Form.Control style={{width:"400px", margin:"0 auto"}} name="name"
                onBlur={handleOnBlur} type="text" placeholder="Your Name" />
                <br />
                <Form.Control style={{width:"400px", margin:"0 auto"}} name="email"
                onBlur={handleOnBlur} type="email" placeholder="Your Email" />
                <br />
                <Form.Control style={{width:"400px", margin:"0 auto"}} name="password"
                onBlur={handleOnBlur} type="Password" placeholder="Type your Password" />
                <br />
                <Form.Control style={{width:"400px", margin:"0 auto"}} name="password2"
                onBlur={handleOnBlur} type="Password" placeholder="Re-type your Password" />
                <br />
                <Button type="submit">Registration</Button>
                <Nav.Link href="/login">Already User? Please Login</Nav.Link>
                </form>
            }
            {isLoading && <Spinner animation="border" />}
            {user?.email && ['success'].map((variant, idx) => (
           <Alert key={idx} variant={variant}>
             Account {variant} create!
             </Alert>
             ))};
             {
                 authError&& ['warning'].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                      {authError}
                    </Alert>
                  ))};  
        </div>
    );
};

export default Register;