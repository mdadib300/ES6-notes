// Keys, values, entries, delete, seal, freeze

// Keys indicates to the properties of an object. We can get them using object.keys(objectName);
const car = {
    name: 'Audi',
    model: 'V8',
    price: 12500000
}

const keys = Object.keys(car);
console.log(keys);

// Values
const values = Object.values(car);
console.log(values);

// CHECK OUT THESE
// Entries - Gives the pair of keys and values
// Delete - Delete an element of an object
// Freeze
// Seal