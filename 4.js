function Multiples(arr) {
  const count = {};
  for (let i = 1; i <= 9; i++) {
    count[i] = arr.filter(n => n % i === 0).length;
  }
  console.log(count);
}


const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
Multiples(input);