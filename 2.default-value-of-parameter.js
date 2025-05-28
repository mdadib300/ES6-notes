function sum(num1, num2){
    console.log(num1, num2);
    return num1+num2;
}

console.log(sum(10,20));
// what if we don't pass the second argument?
console.log(sum(10));
// the second argument is undefined
// Now we will set the default value of the parameters for this kind of situation
// so let's create a new function for multiplication

function multiplication(n1 = 1, n2 = 1){
    console.log(n1, n2);
    return n1*n2;
}

console.log(multiplication(10,2));
console.log(multiplication(10));
console.log(multiplication(2));
console.log(multiplication());