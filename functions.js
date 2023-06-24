//1. create a function that displays the message ' hello' in the console

const greet = () =>{
    console.log('hello');
}

greet();


//2. create a function and add a parameter called name that displays the message ' hello , name'

//3/ calling greet1 without a name. display ' hello, there.'

const greet1 = name => {
    if(!name) {
        return 'Hello, there!'
    } else {
        return `Hello, ${name} !`;
    }
    
}

greet1()



//4 create a function that takes a number in degrees Celsius and returns a number in degrees in Fahrenheit

const covertToFahrenheit = degree => {
    return ((degree*9 / 5) + 32 )
}

covertToFahrenheit(10)


//4 create a function that takes a number in degrees Celsius and returns a number in degrees in Celsius

const convertToCelsius = degree => {
    return (degree-32) * 5 / 9
}

convertToCelsius(86)


//5 create a function that takes a number and a unit, and converts it into the other unit.

const convertTemperature = (degree, unit) => {
    if(unit === 'F') {
        return (((degree*9 / 5) + 32).toFixed(2) ) + 'C'
    }else if (unit === 'C') {
        return ((degree-32) * 5 / 9).toFixed(2) + 'F'
    }
}

convertTemperature(64,'C')


//6 create a function that has an early return

const updateCartQuantity = (num) => {
    if (num <= 0) {
        console.log('Not enough items in the cart');
        return;
    }
}

updateCartQuantity(0)