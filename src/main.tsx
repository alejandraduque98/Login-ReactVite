import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//RouterProvider
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Login from './routes/Login.tsx'
import Singup from './routes/Singup.tsx'
import Dashboard from './routes/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/Singup",
    element: <Singup/>,
  },
  {
    path: "/Dasboard",
    element: <Dashboard/>,
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
