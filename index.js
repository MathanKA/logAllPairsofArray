const boxes =['a','b','c','d','e'];


function logPairs(array) {
  for(let i=0; i < array.length; i++) {
    for(let j=0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}


logPairs(boxes);

// For nested loops
// O(n * n) -- > O(n^2)

// O(n2) - Quadratic Time