import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// • Task 1: • Set up a basic React Router with two routes: one for a Home page and one for an About page. Display the appropriate content based on the URL.
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Define Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// • Task 2: • Create a navigation bar using React Router’s Link component that allows users to switch between the Home, About, and Contact pages


// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Simple Components
// function Home() {
//   return <h1>Welcome to the Home Page</h1>;
// }

// function About() {
//   return <h1> About Us Page</h1>;
// }

// function Contact() {
//   return <h1> Contact Us Page</h1>;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       {/* Navigation Bar */}
//       <nav style={{ padding: "10px", background: "#f0f0f0" }}>
//         <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
//         <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>

//       {/* Page Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App
