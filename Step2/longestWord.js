const longestWord = arr => {
    let longest = null;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest || longest === null) {
            longest = arr[i].length
        }
    }   return longest
} 

console.log(longestWord(['hi', 'hello']))

//Since this funtion only loops through the array once it will have a time 
//complexity of O(n) that depends on the length of the array.

//Again the space complexity for this function will be O(1).