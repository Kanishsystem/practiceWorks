const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const predicate = (element) => element < 3;//predicate function

function partitionArray(arr, predicate) {
    let satisfyPredicate = []; //1,2
    let doesNotSatisfyPredicate = []; //3,4,5,6,7,8,9,10
  
    
    arr.forEach((element) => {
      
      if (predicate(element)) {
        satisfyPredicate.push(element);
      } else {
        doesNotSatisfyPredicate.push(element);
      }
    });
  
    return {
      satisfyPredicate,
      doesNotSatisfyPredicate,
    };
  }
  
  console.log("Elements satisfied:", partitionArray(myArray, predicate));
