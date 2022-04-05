import { useParams, Route, Routes } from 'react-router-dom'

const apiUsuarios = () => {
  return (
    <Routes>
      <Route exact path="http://localhost:3000/api/detalleProducto/:id" />
    </Routes>
  )
}

export default apiUsuarios
