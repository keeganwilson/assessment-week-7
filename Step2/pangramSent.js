const pangramSent = str => {
    str = str.toLowerCase()
    let has = true;
    let alph = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < alph.length; i++) {
        if (!str.includes(alph[i])) {
            has = false;
        }
    }   return has
}

console.log(pangramSent('The quick brown fox jumps over the lazy dog!'))
console.log(pangramSent('This sentence does not include every letter in the alphabet.'))

//Since this function includes a .includes method inside a for loop the time complexity will be O(n ^ 2). 
//The time complexities of the individual .includes methor and for loop will be O(n) depending upon the length of str.

//Again the space complexity for this function will be O(n) depending upon the length of str.