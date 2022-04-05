import React from 'react'
import ContentRowCenter from './ContentRowCenter'
import ContentRowMovies from './ContentRowMovies'
import Chart from './Chart'

function ContentRowTop({ users, products, productsCategory, productsData }) {
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Turing Tech Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <ContentRowMovies
          users={users}
          products={products}
          productsCategory={productsCategory}
        />
        <ContentRowCenter productsData={productsData} />
        <Chart productsData={productsData} />
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  )
}
export default ContentRowTop
