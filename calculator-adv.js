let command = process.argv[2];

command = command + "+";
let sum = 0;

let newNumber = "";
let symbol = "";

for (let i = 0; i < command.length; i = i + 1) {
  const char = command[i];

  if (char == "+" || char == "-" || char == "*" || char == "/") {
    // console.log("symbol: " + char);
    symbol = char;
    // console.log("symbol: " + symbol);
    switch (symbol) {
      case "+":
        sum = sum + Number(newNumber);
        break;
      case "-":
        sum = sum - Number(newNumber);

        break;
      case "*":
        sum = sum * Number(newNumber);

        break;
      case "div":
        sum = sum / Number(newNumber);
        break;
    }

    newNumber = "";
  } else {
    // console.log("number: " + char);
    newNumber = newNumber + char;
    // console.log("newNumber: " + newNumber);
  }
}

/*

10 + 20 + 10000

for (0..3){
  sum = sum + newNumber 

}

0 + 10 = 10

10 + 20 = 30

30 + 30 = 60
*/

console.log("Result = " + sum);

// Conditions 3, using for loop

// switch (symbol) {
//   case "add":
//     console.log(a + b);
//     break;
//   case "sub":
//     console.log(a - b);
//     break;
//   case "mul":
//     console.log(a * b);
//     break;
//   case "div":
//     if (b == 0) {
//       console.log("Invalid Number");
//       process.exit(1); // 1 error, 0 no error
//       // return
//     }
//     console.log(a / b);
//     break;
//   default:
//     console.log('You have entered invalid Symbol: "' + symbol + '"');
//     console.log("Valid Symbols are add, sub, mul and div.");
// }
