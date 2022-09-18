const moment = require("moment/moment");

const m = moment();

// We can manipulate time strings adding or subtracting some unit

// Add
console.log(`Original Moment: ${m.toString()}`);
// Adding hours with ".add(QuantityOfUnit, "Unit")"
m.add(4, "hours");
console.log(`After Manipulation: ${m.toString()}`);

// Subtract
console.log(`Original Moment: ${m.toString()}`);
// Subtracting hours with ".subtract(QuantityOfUnit, "Unit")"
m.subtract(4, "hours");
console.log(`After Manipulation: ${m.toString()}`);

// Chaining
console.log(`Original Moment: ${m.toString()}`);
// We can chain methods to manipulate time strings
m.add(4, "hours").add(13, "minutes");
console.log(`After Manipulation: ${m.toString()}`);

// Use object to manipulate time strings
console.log(`Original Moment: ${m.toString()}`);
// We can pass object trough the method to manipulate multiple units using one method
m.add({
  days: 2,
  minutes: 14,
});
console.log(`After Manipulation: ${m.toString()}`);

// StartOf and EndOf
// We can choose starting and ending of units
// Select start of the day
console.log(m.startOf("d").toString());
// Select end of the moth
console.log(m.endOf("M").toString());

// utc will revert time zone to initial GMT+0000
console.log(moment.utc().toString());

// local will show you your actual time zone
console.log(m.local().toString());

// We can use utcOffset() to know which time offset our time string actually is
console.log(m.utcOffset());

// Using the same mathod we can manipulate time offset
console.log(m.utcOffset(5).toString());
// If we pass number over +15 and above -15 it will automatically change in minutes
m.utcOffset(-3);
console.log(`Before Manipulation: ${m.toString()}`);
console.log(`After Manipulation: ${m.utcOffset(300).toString()}`);

// If we want to manipulate offset more concretely we can use syntax like ↓
console.log(m.utcOffset("-04:15").toString());
