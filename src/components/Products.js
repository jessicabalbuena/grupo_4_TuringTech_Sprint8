import React, { useState, useEffect } from 'react'
import './Products.css'
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
    <div className='product__total'>
        <h2 className='product__h2'>Productos</h2>
    <table className='users__nombres'>
        <thead>
        <tr>
            <br></br>
            <th>Nombre</th>
            <th>ID</th>
            <th>URL</th>
        </tr>
      </thead>

        
        {productDetail.length > 0 
        ? productDetail.map((product, i) => {
            return (
                <tr className='users__total-p'>
                <div key={i + 1} className="users__total-div"></div>
                <td> {product.Description}</td>
                <td>{product.Id}</td>
                <td>{product.detail}</td>
                <button className='btn-bootstrap' onClick={() => handleClickBack()}>
                  Lista de productos
                </button>
                
                </tr>
              
            )
          })
        : products.map((product, i) => {
            return (
              <tr className='users__total-p'>
                <div key={i + 1} className="users__total-div"></div>
                <td>{product.Description}</td>
                <td>{product.Id}</td>
                <td>{product.detail}</td>
                <button className='btn-bootstrap' onClick={() => handleClickGet(product)}>
                  Detalle de producto
                </button>
                
                </tr>
              
            )
          })}
          
          </table>
    </div>
  )
}

export default Products