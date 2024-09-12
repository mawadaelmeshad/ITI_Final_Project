import React, { useState } from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import login from '../Images/login.png';
import './css-components/login.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (name.length < 8 || name.length > 15) {
            swal("Username must be between 8 and 15 characters.");
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            swal("Please enter a valid email address.");
            isValid = false;
        }

        const phonePattern = /^\+?[1-9]\d{1,14}$/;
        if (!phonePattern.test(phone)) {
            swal("Please enter a valid phone number (e.g., +123456789).");
            isValid = false;
        }

        if (!password) {
            swal("Password is required.");
            isValid = false;
        }

        if (isValid) {
            swal("Form submitted successfully", "", "success").then(() => {
                window.location.href = '/';
            });
        } 
    };

    return (
        <div className="login">
            <div className='contain-login'>
                <div className='contain-img'>
                    <img src={login} alt="login photo" />
                </div>
                <div className='contain-form'>
                    <h2>Create an account</h2>
                    <p>Enter your details below</p>
                    <form className='form' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type='tel'
                            placeholder='Phone Number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />

                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <MDBBtn className='orange-btn' type='submit'>Create account</MDBBtn>
                        <MDBBtn className='white-btn'>
                            <MDBIcon fab icon="google" className='google-icon' />
                            Sign up with Google
                        </MDBBtn>
                        <p>Already have an account? <Link to='/login' style={{ textDecoration: "underline" }}>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
