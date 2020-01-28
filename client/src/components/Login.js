import React, { useState } from "react";
import axiosWithAuth from './axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/bubbles');
            console.log(res);
        })
        .catch(err => {
            console.log('login error', err);
        })
        setCredentials({
            username: '',
            password: ''
        })
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      {/* <p>Build a login page here</p> */}
      <div className='login-container'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button type='submit'>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
