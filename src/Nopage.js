import React from 'react'
import { Link } from 'react-router-dom'

export default function Nopage() {
  return (
    <div>
    <h1>No Page</h1>
    
    <Link to="/" className="link">Home</Link>
    </div>
    
  )
}
