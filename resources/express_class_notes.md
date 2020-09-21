








**npm**
- node package manager
- a utility to manage th package develoed for nodejs
- can be used for 
  - installing paackages
  - upgrading 



 ### a baic express application
  ```js

    const express = require('express')

  const app = express()
  app.listen(3000,'0.0.0.0',() => {
      console.log('server started)
  } ) 

  ```

### route

- mapping of http method,url, and handeler (function)

```js

//this route wiill be invoked when the request
app.get('/',(request,response) => {
    response.end()
})

```

