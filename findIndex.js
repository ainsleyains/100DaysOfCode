// 1. create an array of SVGStringList, loop over the array, and check if the string 'climate' is inside the array. if it is, console.log() the index of the word in the array.


// 2. modifyQ1 so that if 'climate' appears multiple times in the array, it will console.log() the index of the first appearance of the word.



//answer

const arr = ['world','workday','climate', 'safe', 'climate']
let index = 0

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 'climate') {
        index = i;
        break;
    }

    console.log(index)
}