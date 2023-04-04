import React, { useState } from 'react';
import {Link} from "react-router-dom"
import "./login.css"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

   

    const response = await fetch('/api/login....', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }); 

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Greska');
    }

    
  };

  return (
    <div className='login'>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
    <Link to="/" style={{ textDecoration: 'none' }} className="link">Home</Link>
    </div>
  );
}

export default Login;
