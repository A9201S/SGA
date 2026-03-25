import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './inicio.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'

// ✅ Configurar rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register", 
    element: <Register />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* ✅ Usar RouterProvider */}
  </StrictMode>
)