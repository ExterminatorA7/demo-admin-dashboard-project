/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../components/loadingbutton'
import useForm from '../hooks/useForm';
import '../screens/signup.css'

const SignUp = () => {


    const [user, setUser] = useState('');
    // const [username, setUsername] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    const [showLoader, setShowLoader] = useState(false)

    //Final submit function
    const formLogin = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }

    //Custom hook call
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);


    const onSubmit = () => {


       


        const username = values.username;
        const email = values.email;
        const password = values.password;

        if (username.length === 0 || password.length === 0) {
            return alert('fill the Data')
        } else {
            
            const userData = {
                username: values.username,
                email: values.email,
                password: values.password
            }

            setShowLoader(true);
            axios.post("http://localhost:8080/api/auth/signup", userData
            ).then((res) => {
                console.log(res);
                setShowLoader(false);
                Swal.fire({
                    title: "Susscefully Register",
                    text: 'Your Account has been added',
                    type: 'success',
                    
                })
                //window.location.replace('/');
            }).catch(err => {
                setShowLoader(false)
                alert(err)
            })
        }
    }


    return (
        <form onSubmit={handleSubmit}>

            <h3>Sign Up</h3>

            <div className="mb-3">
                <label>User name</label>
                <input
                    className="form-control"
                    type="text"
                    minLength={5}
                    required
                    name="username"
                    placeholder="Enter username"
                    onChange={handleChange}

                />
                {
                    errors.username && <h1 style={{ fontSize: 10, marginTop: 10, color: 'red', letterSpacing: 0.5 }}>{errors.username}</h1>
                }
            </div>

            <div className="mb-3">
                <label>Email address</label>
                <input
                    className="form-control"
                    type="email"
                    name='email'
                    required
                    placeholder="Enter email"
                    onChange={handleChange}
                />
                {
                    errors.email && <h1 style={{ fontSize: 10, marginTop: 10, color: 'red', letterSpacing: 0.5 }}> {errors.email}</h1>
                }
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    className="form-control"
                    type="password"
                    name="password"
                    minLength='8'
                    required
                    placeholder="Enter password"
                    onChange={handleChange}
                />
                {
                    errors.password && <h1 style={{ fontSize: 10, marginTop: 10, color: 'red', letterSpacing: 0.5 }}  >{errors.password}</h1>
                }
            </div>

            <div className="d-grid">

                <Button
                    id="btn"
                    type="submit"
                    className="btn btn-primary"
                    text="Submit"
                    onSubmit={() => onSubmit()}
                    loading={showLoader}
                    disabled={showLoader}
                />

            </div>

            <p className="forgot-password">
                Already registered <a href="/sign-in">Login?</a>
            </p>

        </form>
    )

}

export default SignUp;