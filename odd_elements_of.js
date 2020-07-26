function oddElementsOf(arr) {
  let outcome = [];

  for(let idx = 1; idx < arr.length; idx += 2) {
    let char = arr[idx];
    outcome.push(char);
  }

  return outcome;
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]
