import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminPanel() {
  return (
    <div className='navbar'>
            <Link to="/admin/createpost" className="link">Create Post</Link>
            <Link to="/admin/listofusers" className="link">List of Users</Link>
            <Link to="/admin/listofposts" className="link">List of Posts</Link>

            <div className="nav-links">
            <Link to="/login" className="link">Logout (admin)</Link>
            </div>
    </div>
  )
}
