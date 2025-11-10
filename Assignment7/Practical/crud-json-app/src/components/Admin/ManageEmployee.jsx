import React,{useState,useEffect} from 'react'
import { FaEdit,FaTrash } from 'react-icons/fa';
import axios from 'axios';
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function ManageEmployee() {
  const [data,setData]=useState("");
  useEffect(()=>{
    axios.get(`http://localhost:3000/assignto`).then((response)=>{
      setData(response.data);
    })
  },[data])
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='ml-20 p-4'>
          <h2 className='text-2xl font-bold mb-4'>Manage Employee</h2>
          <table className='min-w-full bg-white'>
            <thead>
              <tr>
                <th className='py-2 px-4 border-b border-gray-200'>Id</th>
                <th className='py-2 px-4 border-b border-gray-200'>Name</th>
                <th className='py-2 px-4 border-b border-gray-200'>Email</th>
                <th className='py-2 px-4 border-b border-gray-200'>Position</th>
                <th className='py-2 px-4 border-b border-gray-200'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((emp) => {
                return (
                  <>
                    <tr>
                      <td className='py-2 px-4 border-b border-gray-200'>{emp.id}</td>
                      <td className='py-2 px-4 border-b border-gray-200'>{emp.name}</td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {emp.email}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>{emp.position}</td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2'>
                          <FaEdit />
                        </button>
                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'>
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  </>
                )
              })
              }
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}
