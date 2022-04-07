import React, { useState, useEffect } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])

  let APIUrlProduct = 'http://localhost:3000/api/listarProducto'

  useEffect(() => {
    fetch(APIUrlProduct, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      cache: 'default',
    })
      .then((res) => res.json())
      .then((products) => {
          setProducts([...products.products])
      })
  }, [])
  return (
    <div>
        <h2>Productos</h2>
        {products.length > 0 && products.map((product, i) => {
        return (
          <ul key={i + 1} className="users__total-ul">
            <li>Nombre: {product.name}</li>
            <li>Descripcion: {product.Description}</li>
            <li>$: {product.price}</li>
            <li>Id: {product.Id}</li>
            <li>URL:  {product.detail}</li>
            <hr></hr>
          </ul>
        )
      })}
    </div>
  )
}

export default Products