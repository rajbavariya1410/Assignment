import React,{useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function AddEmployee() {

  const id=useRef("");
  const name=useRef("");
  const email=useRef("");
  const position=useRef("");
  const navigate=useNavigate();


  const AddEmployee=async(e)=>{
    e.preventDefault();
      var insert={
        id:id.current.value,
        name:name.current.value,
        email:email.current.value,
        position:position.current.value
      }
      try{
        axios.post(`http://localhost:3000/assignto`,insert).then(()=>{
          Swal.fire({
            icon:"success",
            title:"Employee Added Successfully"
          });
          e.target.reset();
          navigate("/ManageEmployee");
        });
      }catch(error){
        console.log('error generated',error);
      }
  }
  return (
    <>
      <Header />
      <div className='flex'>
      <Sidebar />
      <div className='ml-64 p-4'>
        <h2 className='text-2xl font-bold mb-4'>Add Employee</h2>
        <form onSubmit={AddEmployee} className='max-w-md bg-white p-6 rounded shadow-md'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='id'>Id</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='id' type='text' placeholder='Enter id' ref={id}/>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Enter name' ref={name}/>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Enter email' ref={email}/>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='position'>Position</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='position' type='text' placeholder='Enter position' ref={position}/>
          </div>
          <div className='flex items-center justify-between'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Add Employee</button>
          </div>
        </form>
      </div>
      </div>
      <Footer />
    </>
  )
}
