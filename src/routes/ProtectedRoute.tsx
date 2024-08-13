//impotamos elementos de react router dom
import { useState } from "react"
import { Outlet, Navigate } from "react-router-dom"

// esta ruta va a validar si uel usurio esta autenticado y si no lo redige a un ruta publica

export default function ProtectedRoute() {
     //creamos un stado de autenticacion
     const [isAuth, setIsAuth]=useState(true);
    
     return(
        // si isAuth es verdara muestre el contenido<Outlet> y si no envialo a login
        isAuth ? <Outlet /> : <Navigate to="/" />
    )
}