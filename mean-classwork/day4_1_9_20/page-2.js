const http = require('http')

const server = http.createServer((request, response) => {
  console.log('request received')

  if (request.url == '/product')
{
    if (request.method == 'GET') {
      console.log('select * from product')
    } else if (request.method == 'POST') {
      console.log('insert into product ...')      
    } else if (request.method == 'PUT') {
      console.log('update product ...')
    } else if (request.method == 'DELETE') {
      console.log('delete product ...')
    }
 }

 if (request.url == '/category')
{
    if (request.method == 'GET') {
      console.log('select * from category')
    } else if (request.method == 'POST') {
      console.log('insert into category ...')      
    } else if (request.method == 'PUT') {
      console.log('update category ...')
    } else if (request.method == 'DELETE') {
      console.log('delete category ...')
    }
 }


  response.end('request processed')
})

server.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})
