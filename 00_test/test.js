function hourglassSum(arr) {
  let secArr = []
  let counter = 0
  for (let i = 0; i <= 5; i++) {
    for(let j = 0; j <= 5; j++) {
      let currNumber = arr[i][j]
      secArr[counter] = currNumber
      counter++
    }
  }
  // console.log(secArr)
  let arrayOfSums = []
  for (let i = 0; i < 22; i++) {
    let currHourClassSum = 0
    currHourClassSum = secArr[i] + secArr[i + 1] + secArr[i + 2]
        + secArr[i + 7] +
        secArr[i + 12] + secArr[i + 13] + secArr[i + 14]
    arrayOfSums.push(currHourClassSum)
  }
  let largestSum = Math.max.apply(Math, arrayOfSums);
  console.log(arrayOfSums)
  return largestSum
}

// let arr = 
// [[1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0]]

  let arr2 = [
    [3, 7 ,-3, 0, 1, 8],
    [1, -4, -7, -8, -6, 5],
    [-8, 1, 3, 3, 5, 7],
    [-2, 4, 3, 1, 2, 7],
    [2, 4 ,-5, 1, 8, 4],
    [5,-7, 6, 5, 2, 8]
    ]
  // console.log(hourglassSum(arr))
  console.log(hourglassSum(arr2))