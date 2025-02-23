function generateRandom(n) {
  let arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }

  return arr;
}

function sumArr(arr) {
  return arr.reduce((sum, el) => {
    return sum + el;
  }, 0);
}

export { generateRandom, sumArr };
