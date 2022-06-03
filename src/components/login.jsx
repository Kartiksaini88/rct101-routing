import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Auth } from "./isauth/isauth"


export const Login = ()=>{
 
    const {isauth , login} = useContext(Auth)
    const navigate = useNavigate()
    const handlelogin = ()=>{
      login()
      navigate("/")
    }
    return(
        <div>
        <input type="email" />
        <input type="password" />
        <button onClick={handlelogin}>Login</button>
        </div>
    )
}