import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
export default function ManageContact() {
  const [data,setData]=useState();
  useEffect(()=>{
    try{
      axios.get(`http://localhost:3000/contact`).then((response)=>{
        setData(response.data);
      })
    }
    catch(error)
    {
      console.log('error generating',error);
    }
  },[data]);
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />

      </div>
      <Footer />
    </>
  )
}
