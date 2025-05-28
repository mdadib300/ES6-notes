// Function Expression - Keeping a function in a variable
const sum = function(num1, num2){
    return num1+num2;
};
console.log(sum(2,5));

// Arrow Function
const sum2 = (a,b) => a+b;
console.log(sum2(4,5));

// Arrow Function for Multi-line Function body
const avg = (n1, n2, n3) => {
    const sum = n1+n2+n3;
    return sum/3;
}
console.log(avg(10, 20, 30));

// Use of Arrow Function in Objects
const car = {
    brandName: 'Audi',
    model: 'B546',
    price: 250000000
};
const carPrice = carDetails => carDetails.price;
console.log(carPrice(car));

// Use of Arrow Function in Array
const roomNumbers = [109, 108, 107, 106, 105];
const SecondRoom = roomList => roomList[3];
console.log(SecondRoom(roomNumbers));
