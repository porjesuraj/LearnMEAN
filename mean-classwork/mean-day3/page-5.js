//importing a system(node ) module
const os = require('os')

console.log(`architecture : ${os.arch}`)
console.log(`os: ${os.platform()}`)
console.log(`host name  ${os.hostname()}`)
console.log(`host directory  ${os.homedir()}`)
console.log(`memory ${os.totalmem}`)
console.log(`free memory  ${os.freemem()}`)
console.log(`cpus  ${os.cpus()}`)
console.log(os.cpus())
console.log(`network interfaces ${os.networkInterfaces()}`)
console.log(os.networkInterfaces())