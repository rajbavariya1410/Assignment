import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidebar() {
  return (
    <>
      <div className='w-64 bg-gray-800 text-white min-h-screen'>
        <div className='p-4 text-2xl font-bold border-b border-gray-700'>
          Admin Management
        </div>
        <div className='mt-4 flex flex-col'>
          <Link to="/AddEmployee" className='px-4 py-2 hover:bg-gray-700 cursor-pointer text-decoration-none text-white'>AddEmployee</Link>
          <Link to="/ManageEmployee" className='px-4 py-2 hover:bg-gray-700 cursor-pointer text-decoration-none text-white'>ManageEmployee</Link>
          <Link to="/" className='px-4 py-2 hover:bg-gray-700 cursor-pointer text-decoration-none text-white'>Task Assignment</Link>
          <Link to="/" className='px-4 py-2 hover:bg-gray-700 cursor-pointer text-decoration-none text-white'>ManageTask</Link>
          <Link to="/ManageContact" className='px-4 py-2 hover:bg-gray-700 cursor-pointer text-decoration-none text-white'>Manage Contact</Link>
          <Link to="/Settings" className='px-4 py-2 hover:bg-gray-700 cursor-pointer text-decoration-none text-white'>Settings</Link>
        </div>
      </div>
    </>
  )
}
