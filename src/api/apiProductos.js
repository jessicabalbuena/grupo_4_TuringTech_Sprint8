let APIUrl = 'http://localhost:3000/api/listarProducto'

export default fetch(APIUrl, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  cache: 'default',
})
  .then((res) => res.json())
  .then((products) => console.log(products))
