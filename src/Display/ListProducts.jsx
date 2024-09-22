import React from 'react'

export default function ListProducts({products}) {
  return (
    <>
    {products.map((product,index) =>{
        return(
            <div className="p1" key={index}>
                <h5>{product.name}</h5>
                <p>{product.category}</p>
                <p>{product.price}</p>
            </div>
        )
    })}
    </>
  )
}
