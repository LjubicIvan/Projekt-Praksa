import React, { useState } from 'react';
import {Link, redirect} from "react-router-dom"
import "../style/login.css"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin,setIsAdmin]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username==="admin" && password==="admin"){
      setIsAdmin(true)
    }

    
  };

  if(isAdmin){
    return redirect("/admin")
  }

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
