//create a function that takes an array of strings and returns and array where the string of the certain word is removed.



//answer


const removeBanana = (array, item) => {
    const result = [];

    for(let i = 0; i < array.length; i++) {
        if(array[i] === item) {
            continue;
        }
        result.push(array[i])
    }

    return result;
}

removeBanana(['apple','orange','banana','peach','banana','peach'], 'banana')
