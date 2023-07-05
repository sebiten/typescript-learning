function combine(
  input1: number | string,
  input2: number | string,
  resulConversion: string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resulConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
//   if (resulConversion === "as-number") {
//     return +result;
//   } else {
//     return result.toString();
//   }
// }



const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Seb", "as-text");
console.log(combinedNames);
