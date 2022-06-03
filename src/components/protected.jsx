import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Auth } from "./isauth/isauth"


export const ReqAuth = ({children})=>{
   const {isauth} = useContext(Auth)

   if(isauth){
       return children
   }
   else{
       return <Navigate to="/login"></Navigate>
   }
}