import React, { useState } from 'react';
import { Form, Button, Nav, Alert, Spinner,} from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import {useLocation, useHistory} from "react-router-dom";

const Login = () => {
    const [login, setLogin] = useState({});
    const {user, loginUser, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e =>{
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData = {...login};
       newLoginData[field] = value;
       setLogin(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(login.email, login.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <h1>LOGIN </h1>
            <form onSubmit={handleLoginSubmit}>
            <Form.Control style={{width:"400px", margin:"0 auto"}} name="email"
            onBlur={handleOnChange} type="email" placeholder="Your Email" />
            <br />
            <Form.Control style={{width:"400px", margin:"0 auto"}} name="password"
            onBlur={handleOnChange} type="Password" placeholder="Your Password" />
            <br />
            <Button type="submit">Login</Button>
            <Nav.Link href="/register">New User? Please Register</Nav.Link>
            {isLoading && <Spinner animation="border" />}
            {user?.email && ['success'].map((variant, idx) => (
           <Alert key={idx} variant={variant}>
             Login {variant}!
             </Alert>
             ))};
             {
                 authError&& ['warning'].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                      {authError}
                    </Alert>
                  ))};
            </form>
        </div>
    );
};

export default Login;