let array = [1,2,3,4,5,6];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { 
   
        // Generate random number between 0 is included and  1 is not included
        let j = Math.floor(Math.random() * (i + 1));
                   
        let temp = array[i];//5
        array[i] = array[j]; //5= j
        array[j] = temp;
    }
       
    return array;
 }

 console.log("After shuffling ",shuffleArray(array));
 