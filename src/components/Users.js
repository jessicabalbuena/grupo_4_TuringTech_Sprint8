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
      <div className='users__principal' >
  <div className='users__totales'>
  <h2 className='users__h2'>Usuarios Totales</h2>
  </div>
  <table className='users__nombres'
  >
      <thead>
        <tr>
            <br></br>
            <th>Nombre</th>
            <th>Email</th>
            <th>ID</th>
            <th>URL</th>
        </tr>
      </thead>
    
      <tbody>
      {userDetail.length > 0 
        ? userDetail.map((user, i) => {
            return (

            <tr className='users__total-p'>
              <div key={i + 1} className="users__total"></div>
              <td className='subtitulo__name' >{user.name}</td>
              <td className='subtitulo__email' >{user.email}</td>
              <td className='subtitulo__id' >{user.id}</td>
              <td className='subtitulo__detail' >{user.detail}</td>
              <button className='btn-bootstrap' onClick={() => handleClickBack()}>
                  Lista de usuarios
                </button>
              
            </tr>
            )
          })
          
        : users.map((user, i) => {
            return (
              <tr className='users__total-p'>
              <div key={i + 1} className="users__total"></div>
              <td className='subtitulo__name' >{user.name}</td>
              <td className='subtitulo__email' >{user.email}</td>
              <td className='subtitulo__id' >{user.id}</td>
              <td className='subtitulo__detail' >{user.detail}</td>
              <button className='btn-bootstrap' onClick={() => handleClickGet(user)}>
                  Detalle de usuarios
                </button>
              
            </tr>
            )
          })}
    </tbody>
    </table>
    </div>
    
    
  )}

      export default Users