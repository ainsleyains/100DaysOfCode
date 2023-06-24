//1.create a function findIndex that search an array for a string and return the index of the first appearance of the string . If it doesn't exist in the array, return -1.



//answer

const findIndex = (array, word) => {
    let ind = -1;

    for(let i = 0; i < array.length; i++) {
        if(array[i] === word) {
            return i;
            ;
        }
        
    }

    return ind;
}





findIndex(['pen','scissors','paper','clips'], 'laptop')



