const uniqueChars = str => {
    str=str.toLowerCase();
    let uniqueChars = true
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                uniqueChars = false
            }
        }
    }   return uniqueChars
}

console.log(uniqueChars('Monday'))
console.log(uniqueChars('Moonday'))

//Similar to the last problem I used a double for loop for this solution and the time complexity will again be O(n ^ 2). 
//As before, the time complexity of each individual for loop will be O(n) since it depends on the length of arr.  

//Again the space complexity for this function will be O(n) depending upon the length of str.