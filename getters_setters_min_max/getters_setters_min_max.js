const moment = require("moment/moment");

let m = moment();

console.log(m);
// I Consider u to do NOT belive only us visit official docs. too. https://momentjs.com/docs/#/get-set/

// Getting units
// Using Getter we can know actual units
// Which minute actually is it ?
console.log(m.minute());
// Hour
console.log(m.hour());
// Day
console.log(m.day());
// We can also use plurals.
console.log(m.days());
// Week
console.log(m.week());
// Which quarter of year actually is it ?
// For every units of time we can get() and specify units after "m.get("units")".
console.log(m.get("quarter"));
console.log(m.quarter());

// Setters
// Using Setter we can set units manually
// Setting minutes
m.minute(45);
console.log(m.toString());
// Setting hours
m.hour(6);
// Setting week
m.week(3);
console.log(m.toString());
// Setting days using different method too.
// For every units of time we can set() and specify units and sett them after "m.get("units", quantityOfUnit)".
m.set("date", 6);
console.log(m.toString());
m.date(9)
console.log(m.toString());

// Let's select some different moment to compare.
let diffMoment = moment("2020-01-10")
console.log(m.toString())
console.log(diffMoment.toString())

// Compare them using Min and Max methods.
console.log(moment.min(m, diffMoment))
console.log(moment.min(m, diffMoment).toString())
console.log(moment.max(m, diffMoment))
console.log(moment.max(m, diffMoment).toString())
