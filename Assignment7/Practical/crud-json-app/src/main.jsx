import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LayoutApp from './LayoutApp'
import AdminLogin from './components/AdminLogin'
import AdminLayout from './components/AdminLayout'
import AddEmployee from './components/Admin/AddEmployee'
import ManageEmployee from './components/Admin/ManageEmployee'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LayoutApp />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminLayout" element={<AdminLayout />} />
        <Route path="/AddEmployee" element={<AddEmployee />} />
        <Route path="/ManageEmployee" element={<ManageEmployee />} />
      </Routes>
    </Router>
  </StrictMode>,
)
