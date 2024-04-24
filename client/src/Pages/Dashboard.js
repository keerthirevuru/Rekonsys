import React from 'react'
import { Link } from 'react-router-dom'

function dashboard() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <h1>Welcome to Dashboard</h1>
      <Link to='/login' className='bg-blue-500 w-16 text-center'> Logout</Link>
    </div>
  )
}

export default dashboard
