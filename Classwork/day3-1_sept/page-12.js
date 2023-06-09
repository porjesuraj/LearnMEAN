const os = require('os')

console.log(` os architecture : ${os.arch}`)
//console.log(`os constants = ${os.constants}`)
console.log(`os cpu = `)
 //console.log(os.cpus())
console.log(` os end  = ${os.endianness() }  `) //LE
console.log(` os free memory  = ${os.freemem() }  `)
console.log(` os  process priority = ${os.getPriority(0) }  `) // 0
console.log(` os home directory = ${os.homedir() }  `)
console.log(` os host name  = ${os.hostname() }  `)
console.log(` os average system activity 5,10,15 min  = ${os.loadavg() }  `)
console.log(` os network Interface  =  `)
console.log(os.networkInterfaces())
console.log(` os network platform  = ${os.platform()} `)
console.log(` os release  = ${os.release()} `)
console.log(` os dir = ${os.tmpdir()} `)
console.log(` os network totalmemory  = ${os.totalmem()}  `)
console.log(` os type = ${os.type()} `)
console.log(` os uptime = ${os.uptime()} `)
console.log(` os user info  = ${os.userInfo()} `)
console.log(os.userInfo())
console.log(os.version())
console.log(os.constants.signals.SIGTRAP)