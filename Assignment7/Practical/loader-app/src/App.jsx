import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get('http://localhost:3000/users')
        setUsers(response.data)
      } catch (err) {
        setError('Failed to fetch users. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="ml-2 text-blue-600">Loading...</p>
      </div>
    )
  }

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">User List</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-3 border rounded-md shadow-sm hover:bg-gray-50">
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
