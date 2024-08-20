import React, { useContext, useState, createContext, useEffect } from 'react';
//vamos a crear los estados globales provider
//AuthProvider: es un componente que usa usecontext para guardar el estado y las funciones que van a envolver la funcion

//como no bloqueamos el eslint creamos una interfas para indicar el tipo de variable

interface AuthProviderProps{
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
})

export function AuthProvider({ children }: AuthProviderProps){
    //Vamos a validar que exista la autenficación desde la info que enviamos del backen al front-end
    const [isAuthenticated, setisAuthenticated]= useState(true);
    //nota: cuando tengamos el back const [isAuthenticated, setisAuthenticated]= useState(cambiaomos este avlor segun retorne node.js);

    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )

}

//creamos un hook que nos permite acceder a las funciones de nuestro use context
export const useAuth = () => useContext(AuthContext);