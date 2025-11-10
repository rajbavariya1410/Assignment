import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './App.jsx'
import Users from './assets/component/Fechapi.jsx'
import Store from './assets/component/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    {/* <Users /> */}
    <Store />
  </StrictMode>,
)
