const moment = require("moment/moment")


// Parsing by Current date and time
let m = moment();

console.log("Current date and time:")
console.log(`ToString() => ${m.toString()}`)
console.log(`ToISOString() => ${m.toISOString()}`)


// Create from ISO 8601 string
m = moment("2022-09-18T12:42:00.000+05:00")

console.log("Current date and time from ISO 8601:")
console.log(`ToString() => ${m.toString()}`)
console.log(`ToISOString() => ${m.toISOString()}`)


// Create Using a format 
m = moment(moment(),"DD/MM/YYYY h:mm")

console.log("Current date and time using a format:")
console.log(`ToString() => ${m.toString()}`)
console.log(`ToISOString() => ${m.toISOString()}`)


// Create using milliseconds from epoch (1 Jan 1970)
m = moment(600000)

console.log("Current date and time using milliseconds from epoch 1970:")
console.log(`ToString() => ${m.toString()}`)
console.log(`ToISOString() => ${m.toISOString()}`)


// Create using seconds from epoch (1 Jan 1970)
m = moment.unix(7200)

console.log("Current date and time using seconds from epoch 1970:")
console.log(`ToString() => ${m.toString()}`)
console.log(`ToISOString() => ${m.toISOString()}`)


// Create moment object in UTC mode
m = moment.utc("2022-09-18T13:05:00.000+05:00")

console.log("Current date and time using utc mode:")
console.log(`ToString() => ${m.toString()}`)
console.log(`ToISOString() => ${m.toISOString()}`)
