import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {

        fetch("https://cafe-webapp1.onrender.com/register",{
            method:"POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(data),
          }).then(res=>res.json()).then(data=>{
            console.log(data);
            if(data.message) 
            return navigate("/Login")
            if(data.requrl)
            return navigate("/");
           }).catch((err)=>{
            console.log(err);
            
          })
        console.log(data);
    }

  return (
    <div className="form-container routes">
       <Form onSubmit={handleSubmit(onSubmit)} className="form-field">
                <Form.Field>
                    <label className="form-label">Name</label>
                    <input className="form-input"
                        placeholder='Enter your First Name'
                        type="text"
                        {...register("name", {
                            required: true,
                            
                        })}
                    />
                </Form.Field>
                {errors.name && <p>Please check the Name</p>}
                <Form.Field>
                    <label className="form-label">Email</label>
                    <input className="form-input"
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
                    <input className="form-input"
                        placeholder='Password'
                        type="password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                            // One small case,one big case and one no. mandatory.total Length btw 6 to 15
                        })}
                    />
                </Form.Field>
                {errors.password && <p>Please check the Password</p>}
                <Form.Field>
                    <label className="form-label">Phone No</label>
                    <input className="form-input"
                        placeholder='Phone'
                        type="number"
                        {...register("phone",
                            {
                                required: true,
                                pattern: /^(?=.*[0-9]).{10}$/
                            })}
                    />
                </Form.Field>
                {errors.phone && <p>Please check the Phone No</p>}
                <Form.Field>
                    <label className="form-label">Address</label>
                    <input className="form-input"
                        placeholder='Address'
                        type="text"
                        {...register("address",
                            {
                                required: true,
                            })}
                    />
                </Form.Field>
                {errors.address && <p>Please check the Password</p>}
                <Button className="form-submit" type='submit'>Register</Button>
                <br/>
                <div style={ {textAlign: "center " }}>Already a User!</div>
                <Link className="form-submit" to="/Login">Login</Link>
            </Form>
    </div>
  
  )
}

export default Signup