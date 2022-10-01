// [10, div, 5]

let a = Number(process.argv[2]);
let symbol = process.argv[3];
let b = Number(process.argv[4]);

// Conditions 2, using switch

switch (symbol) {
  case "add":
    console.log(a + b);
    break;
  case "sub":
    console.log(a - b);
    break;
  case "mul":
    console.log(a * b);
    break;
  case "div":
    if (b == 0) {
      console.log("Invalid Number");
      process.exit(1); // 1 error, 0 no error
      // return
    }
    console.log(a / b);
    break;
  default:
    console.log('You have entered invalid Symbol: "' + symbol + '"');
    console.log("Valid Symbols are add, sub, mul and div.");
}
