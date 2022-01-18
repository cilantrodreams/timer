// implement an alarm clock timer which beeps after a specified amount of time has passed

// takes an unlimited number of alarms
// input given through command line arguments in numbers representing seconds
// get input arguments and store them in an array
const alarms = process.argv.slice(2);
console.log(alarms);

// output character '\x07' to make a beep
// loop through alarms and set a timeout at each iteration
// convert alarms to millisecond 
// alarms that are negative should be ignored
// alarms that are not numbers should be ignored
for (const alarm of alarms) {
  if (Number.isInteger(alarm) && alarm > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, alarm * 1000);
  }
}

