
const persons = [
    { name: 'Marek', age: 32, address: {city: 'Bratislava', zipcode: '811 01'}},
    { name: 'Jana', age: 28, address: {city: 'Nitra', zipcode: '949 01'}},
    { name: 'Peter', age: 45, address: {city: 'Trnava', zipcode: '917 01'}},
    { name: 'Zuzana', age: 26, address: {city: 'Kosice', zipcode: '040 01'}},
    { name: 'David', age: 39, address: {city: 'Bratislava', zipcode: '811 06'}},
    { name: 'Eva', age: 33, address: {city: 'Zilina', zipcode: '010 01'}},
    { name: 'Daniel', age: 50, address: {city: 'Presov', zipcode: '080 01'}},
    { name: 'Olga', age: 22, address: {city: 'Bratislava', zipcode: '811 01'}},
    { name: 'Miroslav', age: 41, address: {city: 'Banska Bystrica', zipcode: '974 01'}},
    { name: 'Lucia', age: 29, address: {city: 'Kosice', zipcode: '040 01'}}
];

const personsFilter = persons.filter(person => person.age > 30);

personsFilter.forEach(person => {
    console.log(`${person.name} lives in ${person.address.city}`);
})

console.log('')