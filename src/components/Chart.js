import React from 'react'
import ChartRow from './ChartRow'

function Chart({ productsData }) {
  console.log(productsData)
  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Título</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Género</th>
                <th>Premios</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Título</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Género</th>
                <th>Premios</th>
              </tr>
            </tfoot>
            <tbody>
              {productsData > 0
                ? productsData.map((product, i) => {
                    return <ChartRow {...product} key={i} />
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Chart
