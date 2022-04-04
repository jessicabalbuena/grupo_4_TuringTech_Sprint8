import React from 'react'
import SideBar from './SideBar'
import apiUsuarios from '../api/apiUsuarios'
import apiProductos from '../api/apiProductos'

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
      </div>
    </React.Fragment>
  )
}

export default App
