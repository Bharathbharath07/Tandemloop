function num(x) {
  const result = [];
  for (let i = 0; i < x; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(', '));
}
num(5); 