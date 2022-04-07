import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import UserDetail from './UserDetail'
import './Users.css'

const Users = () => {
  const [users, setUsers] = useState([])

  let APIUrl = 'http://localhost:3000/api/listarUsuario'

  useEffect(() => {
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
  }, [users])

  return (
    <div>
      <h2 className="users__total">Usuarios Totales</h2>
      {users.map((user, i) => {
        return (
          <ul key={i + 1} className="users__total-ul">
            <li>Nombre: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Id: {user.id}</li>
            <li>URL: {user.detail}</li>
            <hr></hr>
          </ul>
        )
      })}
    </div>
  )
}

export default Users
