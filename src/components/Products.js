import React, { useState, useEffect } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  const [productDetail, setProductDetail] = useState([])

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

  const handleClickGet = (product) => {
    setProductDetail([product])
  }
  
  const handleClickBack = () => {
    setProductDetail([])
  }

  return (
    <div>
        <h2>Productos</h2>
        {productDetail.length > 0 
        ? productDetail.map((product, i) => {
            return (
              <ul key={i + 1} className="users__total-ul">
                <li>Nombre: {product.Description}</li>
                <li>Id: {product.Id}</li>
                <li>URL: {product.detail}</li>
                <button onClick={() => handleClickBack()}>
                  Lista de productos
                </button>
                <hr></hr>
              </ul>
            )
          })
        : products.map((product, i) => {
            return (
              <ul key={i + 1} className="users__total-ul">
                <li>Nombre: {product.Description}</li>
                <li>Id: {product.Id}</li>
                <li>URL: {product.detail}</li>
                <button onClick={() => handleClickGet(product)}>
                  Detalle de producto
                </button>
                <hr></hr>
              </ul>
            )
          })}
    </div>
  )
}

export default Products