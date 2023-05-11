import React from 'react'
import { Link } from 'react-router-dom'
import PostPage from "./PostPage"

export default function UserPage() {
  return (
    <div>
        <div className="navbar">
        <Link to="/login" className="link">Logout (User)</Link>

        </div>

        <PostPage/>
    </div>
  )
}
