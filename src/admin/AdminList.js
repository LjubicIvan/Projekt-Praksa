import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminList() {
  return (
    <div>
      <h2> List of Posts...</h2>
    <Link to="/admin" className='link'>Admin Panel</Link>
    </div>
  )
}
