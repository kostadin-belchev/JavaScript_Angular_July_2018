function name(n) {
  let a = 1

  while (a < n) {
    a = a * 2
    console.log(a)
  }

  return a
}

console.log(name(1000))