let APIUrl = 'http://localhost:3000/api/listarUsuario'
let APIDetail = 'http://localhost:3000/api/detalleProducto/13'

export default function APIUsuarios() {
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
    .then((users) => console.log(users))

  fetch(APIDetail, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    cache: 'default',
  })
    .then((res) => res.json())
    .then((userDetail) => console.log(userDetail))
}
