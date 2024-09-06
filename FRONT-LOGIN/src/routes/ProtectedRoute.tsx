//impotamos elementos de react router dom
import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../auth/AuthProvider"

// esta ruta va a validar si uel usurio esta autenticado y si no lo redige a un ruta publica

export default function ProtectedRoute() {

    //en esta constatnte llamamos al hook(useAuth) de  AuthProvider.tsx el cual almacena la variable global isAuthenticated
    const auth = useAuth() 
    
     return(
        // si isAuth es verdara muestre el contenido<Outlet> y si no envialo a login
        auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />
    )
}