import React from 'react'

export default function Header() {
    return (
        <>
            <header className='dark:bg-gray-800 p-4 shadow-md d-flex flex-col md:flex-row md:items-center md:justify-between'>
                <div className='text-3xl font-bold'>Admin Panel</div>
                <div className='p-4 flex items-center gap-4 w-3/4 justify-end'>
                <input type="text" className='border border-gray-300 p-2 rounded w-2/3' placeholder='Search...' />
                <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Search</button>
                <button className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'>Logout</button>
                </div>
            </header>
        </>
    )
}
