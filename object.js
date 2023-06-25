//1 create a object that has a basketball product displays it in the console.

const product = {
    name:'basketball',
    price:2095
}

console.log(product)

//2 using Q1 to increase price by 500 cents

product.price += 500;

console.log(product)


// 3 add a property ' delivery-time' to the object with the value '3 days'

product['delivery-time'] = '3 days';

console.log(product)

//4 create a function that takes 2 products with 'name' and 'price' properties and returns the product that is less expensive

const product1 = {
    name:'hand towels',
    price:1599
}

const product2 = {
    name:'hand towels',
    price:1350
}

const comparePrice = (a, b) => {
    if(product1.price < product2.price) {
        return {product2};
    }else {
        return {product1};
    }
}

comparePrice(product1, product2)


//5 create a function which returns true if two products habe the same values inside('name' and 'price'). If not, return false


function isSameProduct(a, b) {
    return (
      a.name === b.name &&
      a.price === b.price
    );
  }
const product3 = {
    name:'aimParis',
    price:61000
};

const product4 = {
    name:'kenzo',
    price:86000
}

isSameProduct(product3, product4);


//6 convert a string to all lowercase

console.log('Good Morning'.toLowerCase())

//7 repeat a string many times

const mood = 'Happy!'
console.log(mood.repeat(3))