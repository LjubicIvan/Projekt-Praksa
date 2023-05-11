import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';

export default function AdminList() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://localhost:7248/api/Post');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);


  return (
    <div>
      <h2> List of Posts...</h2>
    <Link to="/admin" className='link'>Admin Panel</Link>
    </div>
  )
}
