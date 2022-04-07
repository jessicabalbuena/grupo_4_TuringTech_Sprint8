import React from 'react'

function ChartRow(props) {
  const { Description, length, Price, Id } = props.product
  return (
    <tr>
      <td>{Description}</td>
      <td>{length}</td>
      <td>{Price}</td>
      <td>
        {/* <ul>
          {props.Categories.map((category, i) => (
            <li key={`category ${i}`}>{category}</li>
          ))}
        </ul> */}
      </td>
      <td>{Id}</td>
    </tr>
  )
}

export default ChartRow
