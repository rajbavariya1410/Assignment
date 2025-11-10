import React, { useState, useEffect } from 'react'
import './ContantApp.css';
import axios from 'axios';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa'


export default function ContantApp() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:3000/addtask`).then((response) => {
      setData(response.data);
    })
  },[])
  return (
    <>
      <div className='mt-5 w-4/6 mx-auto'>
        <table id="task-table">
          <thead>

            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((task) => {
              return (
                <tr>
                  <td data-label="Task">{task.title}</td>
                  <div className=''>
                  <td data-label="Description">{task.description}</td>
                  </div>
                  <td data-label="Due Date">{task.dueDate}</td>
                  <td data-label="Priority">{task.priority}</td>
                  <td data-label="Actions">
                    <div className='action-buttons'>
                      <button className="bg-yellow-300 text-white px-2 py-2 rounded"><FaEye /></button>
                      <button className="bg-blue-500 text-white px-2 py-2 rounded"><FaEdit /></button>
                      <button className="bg-red-500 text-white px-2 py-2 rounded"><FaTrash /></button>
                    </div>
                  </td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
