import React, { useState, useEffect } from 'react'
import './Users.css'

const Users = () => {
  const [users, setUsers] = useState([])
  const [userDetail, setUserDetail] = useState([])

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

  const handleClickGet = (user) => {
    setUserDetail([user])
  }
  
  const handleClickBack = () => {
    setUserDetail([])
  }

  return (
    <div>
      <h2 className="users__total">Usuarios Totales</h2>
      {userDetail.length > 0 
        ? userDetail.map((user, i) => {
            return (
              <ul key={i + 1} className="users__total-ul">
                <li>Nombre: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>Id: {user.id}</li>
                <li>URL: {user.detail}</li>
                <button onClick={() => handleClickBack()}>
                  Lista de usuarios
                </button>
                <hr></hr>
              </ul>
            )
          })
        : users.map((user, i) => {
            return (
              <ul key={i + 1} className="users__total-ul">
                <li>Nombre: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>Id: {user.id}</li>
                <li>URL: {user.detail}</li>
                <button onClick={() => handleClickGet(user)}>
                  Detalle de usuario
                </button>
                <hr></hr>
              </ul>
            )
          })}
    </div>
  )
}

export default Users
