let APIUrl = 'http://localhost:3000/api/listarUsuario'
let apiUsuarios

export default apiUsuarios = fetch(APIUrl, {
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
