import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Productdetail = () => {
  const [data, setdata] = useState([])
  const {id} = useParams()
console.log(data)
  let getdata = async ()=>{
      try {
          let res = await fetch(`http://localhost:8080/product/${id}`)
          let data = await res.json()
          setdata([data])
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
        {data.map(e => 
        <div>
          <h3>{e.id}-{e.name}</h3>
          <br /><img src={e.img}></img>
          <br />
          <p>{e.price}</p>
          </div>)}
      </div>
    </div>
  )
}
