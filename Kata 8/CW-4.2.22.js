//4.2.22
function positiveSum(arr) {
    const reducer = (acc,current) => acc + (current > 0 ? current : 0)
    return arr.reduce(reducer, 0)
  }