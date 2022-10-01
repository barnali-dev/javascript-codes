// [10, div, 5]

let a = Number(process.argv[2]);
let symbol = process.argv[3];
let b = Number(process.argv[4]);

// Conditions 1, using if else

if (symbol == "add") {
  console.log(a + b);
} else if (symbol == "sub") {
  console.log(a - b);
} else if (symbol == "mul") {
  console.log(a * b);
} else if (symbol == "div") {
  if (b == 0) {
    console.log("Invalid Number");

    process.exit(1); // 1 error, 0 no error
    // return
  }

  console.log(a / b);
}
