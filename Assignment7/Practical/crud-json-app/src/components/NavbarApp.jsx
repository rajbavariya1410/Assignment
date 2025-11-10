import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaUser } from "react-icons/fa";
import axios from 'axios'
import Swal from 'sweetalert2'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
} from "@material-tailwind/react";



export default function NavbarApp() {
    //for contact modal box

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    const [menuOpen, setMenuOpen] = useState(false);
    const [task, setTask] = useState("");
    // fetch task
    useEffect(() => {
        try {
            axios.get(`http://localhost:3000/addtask`).then((response) => {
                setTask(response.data);
            })
        }
        catch (error) {
            console.log('Error generating', error)
        }

    }, []);


    const title = useRef("");
    const description = useRef("");
    const dueDate = useRef("");
    const priority = useRef("");
    const navigate = useNavigate();


    const AddTask = async (e) => {
        e.preventDefault();
        var insert = {
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value,
            priority: priority.current.value
        }
        try {
            axios.post(`http://localhost:3000/addtask`, insert).then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Task Added Successfully"
                });
                e.target.reset();
                navigate("/");
            });
        } catch (error) {
            console.log('error generated', error);
        }
    }
    return (
        <>

            <header className='header w-full bg-gray-200 shadow-md'>
                <nav className='navbar flex flex-wrap items-center justify-between px-4 py-2 md:px-8'>
                    <div className="flex items-center">
                        <button className="md:hidden mr-2" onClick={() => setMenuOpen(!menuOpen)}>
                            <FaBars className='text-white bg-yellow-500 p-2 rounded-md text-3xl' />
                        </button>
                        {/*login as admin button */}
                        <Link to="/AdminLogin" className="nav-links p-3 block text-yellow-400  hover:text-yellow-500 text-center">
                            <FaUser className='inline-block mr-1 text-blue-500' />
                            Login
                        </Link>
                        <span className="font-bold text-lg text-gray-800 w-full text-center block"><h2 className="m-0">Task ManagerApp</h2></span>
                    </div>
                    <div className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:block`}>
                        <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2 md:mt-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-links p-3 block text-gray-700 hover:text-yellow-500">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item bg-yellow-400 rounded-md">
                                <button className="nav-links w-full md:w-auto p-3" command="show-modal" commandfor="dialog">
                                    Add Task
                                </button>
                            </li>
                            <li className="nav-item bg-yellow-400 rounded-md">
                                <button className="nav-links w-full md:w-auto p-3">
                                    Manage Task
                                    <span className='text-black bg-yellow-200 rounded-full px-2 py-1 ml-2'>
                                        {task.length}</span>
                                </button>
                            </li>
                            <li className="nav-item rounded-md ">
                                <button onClick={handleOpen} className="nav-links w-full md:w-auto p-3 hover:text-blue-400" >
                                    Contect Us
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/*Contact modal box */}

            <Dialog open={open} size="xs" handler={handleOpen}>
                <div className="flex items-center justify-between">
                    <DialogHeader className="flex flex-col items-start">
                        {" "}
                        <Typography className="mb-1" variant="h4">
                            New message to @{" "}
                        </Typography>
                    </DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={handleOpen}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <DialogBody>
                    <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
                        Write the message and then click button.
                    </Typography>
                    <div className="grid gap-6">
                        <Typography className="-mb-1" color="blue-gray" variant="h6">
                            Username
                        </Typography>
                        <Input label="Username" />
                        <Textarea label="Message" />
                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button variant="text" color="gray" onClick={handleOpen}>
                        cancel
                    </Button>
                    <Button variant="gradient" color="gray" onClick={handleOpen}>
                        send message
                    </Button>
                </DialogFooter>
            </Dialog>

            {/*Modal dialog*/}
            <>

                <el-dialog>
                    <dialog
                        id="dialog"
                        aria-labelledby="dialog-title"
                        className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
                    >
                        <el-dialog-backdrop className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
                        <div
                            tabIndex={0}
                            className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
                        >
                            <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">

                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3
                                                id="dialog-title"
                                                className="text-base font-semibold text-yellow-500"
                                            >
                                                Add New Task
                                            </h3>
                                            <div className="m-auto">

                                                <form className='w-full' onSubmit={AddTask}>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task">
                                                            Task Title
                                                        </label>
                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="task" type="text" placeholder="Enter task" ref={title} />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                                            Description
                                                        </label>
                                                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Enter task description" ref={description}></textarea>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="due-date">
                                                            Due Date
                                                        </label>
                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="due-date" type="date" ref={dueDate} />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                                                            Prioritiy
                                                        </label>

                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                                            Add Task
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-2 py-1 sm:flex sm:flex-row-reverse sm:px-2">
                                    <button
                                        type="button"
                                        command="close"
                                        commandfor="dialog"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        command="close"
                                        commandfor="dialog"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </el-dialog-panel>
                        </div>
                    </dialog>
                </el-dialog>
            </>


        </>
    )
}
