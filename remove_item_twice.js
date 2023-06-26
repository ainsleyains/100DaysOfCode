//1.create a function that takes an array of strings and returns an array where the string of the fist 2 certain word are removed from the array.


//answer

const removeHerbs = (array) => {
    const herbs = []
    let herbsRemoved = 0;

    for(let i = 0; i < array.length; i++) {
        if (array[i] === 'coriander' && herbsRemoved < 2) {
            herbsRemoved++;
            continue;
        }

        herbs.push(array[i])
    }
    return herbs
}

removeHerbs(['cilantro', 'coriander', 'chives', 'coriander', 'curry', 'coriander' ])



//create a function that takes an array of strings and returns an array where the string of the last 2 certain word are removed from the array.

//answer

const removeCoriander = (array) => {
    const herbs = [];
    let corianderRemoved = 0;

    const arr = array.reverse()
    

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'coriander' && corianderRemoved < 2 )  { 
            corianderRemoved++
            continue      
        }
        herbs.push(arr[i])
    }

    return herbs.reverse()
}

removeCoriander(['cilantro', 'coriander', 'chives', 'coriander', 'curry', 'coriander' ])




