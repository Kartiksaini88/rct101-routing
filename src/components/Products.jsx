
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
 const [data, setdata] = useState([])

 let getdata = async ()=>{
     try {
         let res = await fetch("http://localhost:8080/product")
         let data = await res.json()
         setdata(data)
     } catch (error) {
         console.log(error);
     }
 }

 useEffect(()=>{
   getdata()
 },[])

  return (
    <div>
      <div>
        {data.map(e=><div><h3><Link to={`/product${e.id}`}>{e.id}-{e.name}</Link></h3></div>)}
      </div>
    </div>
  )
}


