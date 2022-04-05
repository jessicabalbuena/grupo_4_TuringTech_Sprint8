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
    <div>
        <h2 className='users__total'>Usuarios Totales</h2>
      {users.map((user,i) => {
        return (
          <ul className='users__total-ul'>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.id}</li>
            <li>{user.detail}</li>
            <hr></hr>
          </ul>
        )
      })}
    </div>
  )
}

export default Users
