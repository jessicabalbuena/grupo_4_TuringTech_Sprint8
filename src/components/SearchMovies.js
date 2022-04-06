import React, { useState, useEffect, useRef } from 'react'

import noPoster from '../assets/images/no-poster.jpg'

function SearchMovies() {
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState('')
  const [filter, setFilter] = useState([])

  const inputTag = useRef()

  let inputValue

  useEffect(() => {
    const endpoint = `http://localhost:3000/api/listarProducto`

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        if (!data.Error) {
          setProducts(data.products)
        } else {
          setProducts([])
        }
      })
      .catch((error) => console.log(error))
  }, [keyword])

  const searchProduct = async (e) => {
    e.preventDefault()
    inputValue = inputTag.current.value
    setKeyword(inputValue)
    inputTag.current.value = ''
    let filtered = products.filter((productsFiltered) =>
      productsFiltered.Description.includes(inputValue),
    )
    setFilter(filtered)
  }

  return (
    <div className="container-fluid">
      <>
        <div className="row my-4">
          <div className="col-12 col-md-6">
            <form method="GET" onSubmit={searchProduct}>
              <div className="form-group">
                <label htmlFor="">Buscar por nombre:</label>
                <input ref={inputTag} type="text" className="form-control" />
              </div>
              <button className="btn btn-info">Buscar</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>Productos a buscar: {keyword}</h2>
          </div>
          {keyword !== '' && filter.length > 0
            ? filter.map((productFiltered, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {productFiltered.Description}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={noPoster}
                            alt={productFiltered.Description}
                            style={{
                              width: '90%',
                              height: '400px',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                        <p>{productFiltered.Id}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            : products.length > 0 &&
              products.map((product, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          Producto: {product.Description}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={noPoster}
                            alt={product.Description}
                            style={{
                              width: '90%',
                              height: '400px',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                        <p>Id: {product.Id}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
        </div>
        {products.length === 0 && (
          <div className="alert alert-warning text-center">
            No se encontraron productos
          </div>
        )}
      </>
    </div>
  )
}

export default SearchMovies
