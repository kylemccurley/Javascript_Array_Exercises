function forwardReverse(arr) {
  let outcome = [];

  for(let idx = 0; idx < arr.length; idx++) {
    let char = arr[idx];
    outcome.push(char);
  }

  for (let idx = arr.length - 1; idx >= 0; idx--) {
    let char = arr[idx];
    outcome.push(char);
  }

  return outcome;
}

let arr = [1, 2, 3, 4];
forwardReverse(arr);
