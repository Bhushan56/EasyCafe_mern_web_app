import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
      //Post login data
        fetch("https://cafe-webapp1.onrender.com/login",{
            method:"POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(data),
          }).then(res=>res.json()).then(data=>{
            // console.log(data.requrl);
            if (data.requrl) 
            return navigate("/");

            if(data.message)
            return navigate("/Signup");
          }).catch((err)=>{
            console.log(err);
            
          })
    }

  return (
    <>
    <div className="form-container routes">
       <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
             
                <Form.Field>
                    <label className="form-label">Email</label>
                    <input className="form-input form-field"
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p>Please check the Email</p>}
                <Form.Field>
                    <label className="form-label">Password</label>
                    <input className="form-input form-field"
                        placeholder='Password'
                        type="password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </Form.Field>
                {errors.password && <p>Please check the Password</p>}
                <Button className="form-submit" type='submit'>Login</Button>
                <br/>
                <Link style={ {textAlign: "center "}} to="/Signup">Register</Link>
            </Form>
            </div>
    </>
  
  );
};

export default Login;