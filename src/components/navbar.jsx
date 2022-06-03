import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Auth } from "./isauth/isauth"



export const Nav = ()=>{
  const {isauth , logout} = useContext(Auth)
const navigate = useNavigate()
  const handlelogout = ()=>{
   logout()
   navigate("/login")
  }


    return(
        <div>
            <Link to="/login"><button onClick={handlelogout}>{isauth ? "Logout" :"Login"}</button></Link>
            <Link to={"/product"}><p>See All Products</p></Link>
        </div>
    )
}