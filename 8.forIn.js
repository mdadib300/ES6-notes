const car = {
    name: 'Audi',
    model: 'V8',
    price: 12500000
};

// Technique to get the keys from an object using for-in loop

for(keys in car){
    console.log(keys);
};

// Including values

for(keys in car){
    const values = car[keys];
    console.log(values, keys);
};