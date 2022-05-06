const sumZero = arr => {
    let sumZero = false
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] - arr[j] === 0) {
                sumZero = true;
            }
        }
    }   return sumZero
}

console.log(sumZero([0, 1, 4, 5, 7]))

//Since I used a double for loop for this solution, the time complexity will be O(n ^ 2). The time complexity of each individual for loop
//will be O(n) since it depends on the length of arr.  

////The space complexity for this function will be O(n) depending upon the length of arr.
