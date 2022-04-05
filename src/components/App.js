import React from 'react'
import SideBar from './SideBar'
import APIUsuarios from '../api/apiUsuarios'
import apiProductos from '../api/apiProductos'

function App() {
  APIUsuarios()
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
      </div>
    </React.Fragment>
  )
}

export default App
