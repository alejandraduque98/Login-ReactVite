import { useState } from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Login(){

    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="/Dashboard"/>
    }

    return(
        <DefaultLayout>
            <form action="">
            
            <h1>Login</h1>

            <label htmlFor="">UserName</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor="">Pasword</label>
            <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button>Login</button>
            </form>
        </DefaultLayout>  
    );
}