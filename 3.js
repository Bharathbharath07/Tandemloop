function number(x) {
  const result = [];
  for (let i = 0; result.length < x; i++) {
    let num = 2 * i + 1;
    if (num > 2 * x - 1) break;
    result.push(num);
  }
  console.log(result.join(', '));
}

number(5);