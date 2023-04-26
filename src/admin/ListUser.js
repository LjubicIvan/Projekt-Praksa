import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import "./admin.css"


function ListUser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://user_lista');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div className='list'>
      <h1>User:</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>

          <div className="users-list">
          <h3>Ivan</h3>
          <button className='button-del'>Delete</button>
          </div>
          <div className="users-list">
          <h3>Ivan</h3>
          <button className='button-del'>Delete</button>
          </div>

      <Link to="/admin" className='link'>Admin Panel</Link>

    </div>
  );
}

export default ListUser;
