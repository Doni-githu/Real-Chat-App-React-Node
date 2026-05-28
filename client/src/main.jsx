import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import AuthProvider from './context/auth.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AuthProvider>
  </BrowserRouter>,
)
