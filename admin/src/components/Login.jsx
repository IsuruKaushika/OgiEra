import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

import axios from 'axios';


const Login = ({setToken}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    try{
    e.preventDefault();
    const response =await axios.post(backendUrl+'/api/user/admin',{email,password})
    if(response.data.success){
        setToken(response.data.token)
    }else{
        toast.error(response.data. message)

    }


    }catch(error){
      console.log(error)
    }

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    setError('');
    console.log('Admin Logged In:', { email, password });
    // You can add API call for authentication here
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        {error && <p className="error-text">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
