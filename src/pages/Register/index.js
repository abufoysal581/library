import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link,useNavigate } from 'react-router-dom';
import { register } from '../../Api/AllApi';

function Register() {
    const [inputs, setInputs] = useState([]);
    const navigate=useNavigate();

    // let signup = async(inputs) => {
    //     await register(inputs);
    //     navigate('/signin');
    // }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await register(inputs);
        navigate('/login')
    }
  return (
    <AuthLayout>
        <div className="text-center mb-5">
            <img src="./assets/images/favicon.png" height="48" className='mb-4'/>
            <h3>Sign Up</h3>
            <p>Please fill the form to register.</p>
        </div>
        <form action="index.html">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label for="first-name-column">First Name</label>
                        <input type="text" id="first-name-column" className="form-control"  name="fname-column"/>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label for="last-name-column">Last Name</label>
                        <input type="text" id="last-name-column" className="form-control"  name="lname-column"/>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label for="username-column">Username</label>
                        <input type="text" id="username-column" className="form-control" name="username-column"/>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label for="country-floating">Password</label>
                        <input type="text" id="country-floating" className="form-control" name="country-floating"/>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label for="company-column">Phone</label>
                        <input type="text" id="company-column" className="form-control" name="company-column"/>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label for="email-id-column">Email</label>
                        <input type="email" id="email-id-column" className="form-control" name="email-id-column"/>
                    </div>
                </div>
            </div>
            <Link to="/login">Have an account? Login</Link>
            <div className="clearfix">
                <button className="btn btn-primary float-right">Submit</button>
            </div>
        </form>
    </AuthLayout>
  )
}

export default Register