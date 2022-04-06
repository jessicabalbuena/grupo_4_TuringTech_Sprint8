import React, { useState } from 'react'
import "./Users.css"

const Users = () => {
  const [users, setUsers] = useState([])

  let APIUrl = 'http://localhost:3000/api/listarUsuario'

  fetch(APIUrl, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    cache: 'default',
  })
    .then((res) => res.json())
    .then((users) => setUsers(users.data))

  return (
    <div className='users__principal' >
      <div className='users__totales'>
        <h2 className='users__h2'>Usuarios Totales</h2>
      </div>

      <table className='users__nombres'
      cellSpacing='0'>
        <thead>
          <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>ID</th>
              <th>Detail</th>
          </tr>
        </thead>
        
          
      {users.map((user,i) => {
        return (
        
    
          <tr className='users__total-p'>
            <td className='subtitulo__name' >{user.name}</td>
            <td className='subtitulo__email' >{user.email}</td>
            <td className='subtitulo__id' >{user.id}</td>
            <td className='subtitulo__detail' >{user.detail}</td>

          </tr>
          
        )
      })}
      </table>
      </div>
  )
}
export default Users

// { <div className="card shadow mb-4">
// <div className="card-body">
//   <div className="table-responsive">
//     <table
//       className="table table-bordered"
//       id="dataTable"
//       width="100%"
//       cellSpacing="0"
//     >
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Nombre</th>
//           <th>Apellido</th>
//           <th>Email</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tableRowsData.map((row, i) => {
//           return <ChartRowUser {...row} key={i} />;
//         })}
//       </tbody>
//     </table>
//   </div>
// </div>
// </div>
// );
// } }


