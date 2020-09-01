const fs = require('fs')

function synchronousReadFile()
{ // reading the file 
    //sync/sequential is a blocking call/API ,till sync coommand not completed
    //i.e only after reading the file the other command can be executed
    // so code is not parallel, its  syncronous 
   try{
   
    console.log(` file reading started`)
   const data = fs.readFileSync('./file.txt')
    console.log(` file reading finished`)
    console.log(` data = ${data}`)
    console.log('done')
   } catch(ex) {
       console.log(`exception: ${ex}`)
   }
// mathematical calculation 
    console.log('peforming multiplication')
  const result = 23412424524524 * 3453245245232543
  console.log(`result = ${result}`)
}
//synchronousReadFile()

function asynchronousReadFile()
{
    console.log('reading file started')
    // startsa athread to perform te read operation
    const data = fs.readFile('./file.txt',(error,data) => {
             //the reading is finished
             console.log(` file reading finished`)
             if(error)
             {
                console.log(` error = ${error}`)
             }
             else
             {
                console.log(` data = ${data}`)
             }
            
            
             console.log('bye bye')
        })

    
    //perform multi

   console.log(`performing multiplication`)
   const result = 4823479239*323
   console.log(`answer ${result}`)



}
 asynchronousReadFile()

function funtion1() {
    console.log('download started')
    setTimeout(() => {
      console.log('download finished')
    }, 5000)
  
    // perform mathematical operation
    console.log('performing mulitplication')
    const result =  244534433534 * 23424243242243
    console.log(`answer = ${result}`) 
    
    console.log('performing another task')
    setTimeout(() => {
      console.log('another task finished')
    }, 10000)
  }
  
  // funtion1()
  
  
  function myReadFile(path, func) {
    // func =  (error, data) => { .. }
    const data = fs.readFileSync(path)
    setTimeout(() => {
      func(null, data)
    }, 10000)
  }
  
  function function2() {
    console.log('reading started')
    myReadFile('./file.txt', (error, data) => {
      console.log(`data = ${data}`)
      console.log('reading finished')
    })
  
    // perform mathematical operation
    console.log('performing mulitplication')
    const result =  244534433534 * 23424243242243
    console.log(`answer = ${result}`)
  }
  
  //function2()