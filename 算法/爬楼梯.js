function floor(num) {
  if (num <= 1) return 1;
  let a = 1;
  let b = 1;
  let c = 0;
  for (i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

floor(3);

function floor1(num) {
  if (num <= 1) return 1;
  const obj = {};
  obj[0] = 1;
  obj[1] = 1;
  for (let i = 2; i <= num; i++) {
    obj[i] = obj[i - 1] + obj[i - 2];
  }
  return obj[num];
}
