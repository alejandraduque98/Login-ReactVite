import { useState } from "react";
import DefaultLayout from "../Layout/DefaultLayout";

import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Singup(){

    //definimos un estado para cada uno de los campos

    const [name, setName]= useState("");
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="/Dashboard"/>
    }
    return (
        
        <DefaultLayout>
            <form className="form" action="">
            
                <h1>SingUp</h1>

                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="">UserName</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="">Pasword</label>
                <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button>Create User</button>
            </form>
        </DefaultLayout>  
        
    )
}