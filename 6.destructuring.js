// Destructuring refers to - object ba array theke element gula alada alada vabe ber kore niye asha
// Object Destructuring
const adib = {
    age: 21,
    money: 120,
    study: 'B.Sc. in EEE'
}

const {age, study} = adib;
// The identifiers in the {} are set as variables
console.log(age);
console.log(study);

// Array Destructuring
const marks = [12, 2, 5, 68, 98];

const [first, second, , fourth] = marks;
// The identifiers in the [] are set as variables
console.log(first);
console.log(second);
console.log(fourth);