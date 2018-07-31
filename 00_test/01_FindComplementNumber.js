function findOnesComplement(num) {
  let binaryRep = num.toString(2)
  let binaryComplement = ''
  for (const digit of binaryRep) {
    binaryComplement += (digit == 0 ? 1 : 0) 
  }
  return Number.parseInt(binaryComplement, 2)
}

console.log(findOnesComplement(26))
