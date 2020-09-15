### Mean installtion commands.
- Give This command on terminal one by one on .And Check Versions
(This is only for Linux Platform)  

1. sudo apt-get update

2. sudo apt-get install nodejs

---> node -v  //v12.7.0 

3. sudo apt-get install npm

---> npm -v  //6.14.6

4. sudo npm cache clean  -f

5. sudo npm install -g  n

6. sudo n latest

7. sudo npm install  -g @angular/cli
---> ng --version //10.0.2

8. sudo npm install  -g typescript

---> tsc -v //3.7.4

9. sudo npm install  -g nodemon

---> nodemon -v //2.0.2

## module installation
```
sudo npm init

sudo npm install express mysql mysql2 --save

```
### for global access to git ,on username and password needed after 1st time 
```
git config --global credential.helper store

```
### to check if server is listening/working on a port n
```bash
 sudo lsof -i :3000 ;
   3000 = port no

//to stop it use
 kill PID

pid= process id (number) e.g 12806

```

### setup express server
```js
// step 1: require express and mysql
const express = require('express')
const mysql = require('mysql')



// step 2: create express application
const app = express()

// step 3: ROUTE (mapping of http GET, url and handler (function))
// GET /
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mydb'
})
connection.connect();

app.get('/', (request, response) => {
  console.log('GET / received')
  var queryText = "select * from user";
    
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
})


// step 4: listen on port 3000
app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})
```



### Command for downloading node_module
```bash
npm install
```

### Command to create create gitignore file
```bash
touch .gitignore
```


### Site to create gitignore file
```
https://toptal.com/developers/gitignore
```
### git command

```bash
//Command to uplaod the data
git add .

git commit -m "Title for logical commits"

git push
```
### sample code of I/O single line :

```
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function(input) {
   stdin_input += input;
   //reading input from STDIN

});

process.stdin.on("end",function()
{
    main(stdin_input);
});

function function1(input)
{
    var num = []
    num = input.split("\n")
    process.stdout.write(`${num[0]*2}`)
    process.stdout.write("\n")
    process.stdout.write(`${num[1]}`)
   //process.stdout.write(" "+num[0]*2+ "\n"+num[1]); 
}

function main(input)
{
    function1(input);

}
```


### typescript

1. compatible code
```ts

tsc --target es5  page3.ts;node page3.js

// set compile for es5 and higher
```