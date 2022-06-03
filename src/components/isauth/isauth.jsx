import { createContext, useState } from "react";


export const Auth = createContext()

export const AuthProvider = ({children})=>{
    const [isauth , setauth] = useState(false)

    const login = ()=>{
        setauth(true)
    }
    const logout = ()=>{
        setauth(false)
    }

    return(
        <Auth.Provider value={{isauth , login , logout}}>{children}</Auth.Provider>
    )
}