import React, { useEffect, } from 'react'

export default function UseEffect() {

    useEffect(() => {
      

       setTimeout(()=>{
           
               fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())            
            .then(json=>console.log(json))
       },5000);
    }, [])
    

  return (
    <>
    <h1>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
    </>
  )
}
