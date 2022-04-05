import React from 'react'

function ChartRow(props) {
  console.log(props)
  return (
    <tr>
      <td>{props.Description}</td>
      <td>{props.length}</td>
      <td>{props.Price}</td>
      <td>
        <ul>
          {props.Categories.map((category, i) => (
            <li key={`category ${i}`}>{category}</li>
          ))}
        </ul>
      </td>
      <td>{props.Id}</td>
    </tr>
  )
}

export default ChartRow
