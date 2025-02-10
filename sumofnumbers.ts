// Problem 1
//Write four functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion, and array functional programming.

function sumFor(input: number[]) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
}

console.log(sumFor([1, 2, 3, 4]));

function sumWhile(input: number[]) {
  let sum = 0;
  let i = 0;
  while (i < input.length) {
    sum += input[i];
    i++;
  }
  return sum;
}

console.log(sumWhile([1, 2, 3, 4]));

function sumRecursion(input: number[], index: number = 0): number {
  if (index >= input.length) { //base case
    return 0;
  }
  return input[index] + sumRecursion(input, index + 1); //recursion
}

console.log(sumRecursion([1, 2, 3, 4]));

function sumTheFunctionalWay(input: number[]) {
  return input.reduce((sum, num) => sum + num, 0);
}

console.log(sumTheFunctionalWay([1, 2, 3, 4]));
