const user1 = {
    id: 1,
    address: 'keraniganj',
    name: {
        firstName: 'Adib',
        secondName: {
            bongshogoto: 'Chowdhury',
            hudagoto: 'Khan'
        }
    },
    age: 21
};

const user2 = {
    id: 2,
    address: 'uttora',
    name: {
        firstName: 'Abid',
        lastName: {
            bongshogoto: 'Chowdhury',
        }
    },
    age: 21
};

// There are 2 objects which contain more objects in it. We'll get the values of the objects. Suppose, bongshogoto name!
// For first one
console.log(user1.name.secondName.bongshogoto);
console.log(user2.name.secondName.bongshogoto);
// Error occured in second console log because there is no secondName. To avoid this error we will use optional Chaining. 
// Use a ? mark before . 
// It means if this exists, continue or skip
console.log(user2.name.secondName?.bongshogoto);
// It will return 'Undefined' but no error. (Comment out the previous one before executing this)