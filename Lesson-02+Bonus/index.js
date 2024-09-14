//1. Definujte pole uživatelských objektů s vlastnostmi: name (jméno), age (věk) address (
//   adresa - objekt, který obsahuje ulici, číslo popisné, město a PSČ) a vytvořte alespoň 10 různých virtuální osob.
//2. Pomocí metod pole odfiltrujte uživatele mladší 30 let (zůstanou pouze uživatelé starší 30 let).
//3. Převeďte toto filtrované pole na nové pole řetězců pomocí šablonových literálů do formátu: "Jméno bydlí v město"
//4. Toto pole postupně vypište vypište do konzole (jedna položka pole = jeden console.log)

const persons = [
    { name: 'Marek', age: 32, address: 'Hlavna 12', city: 'Bratislava', zipcode: '811 01'},
    { name: 'Jana', age: 28, address: 'Kotlarska 25', city: 'Nitra', zipcode: '949 01'},
    { name: 'Peter', age: 45, address: 'Masarykova 8', city: 'Trnava', zipcode: '917 01'},
    { name: 'Zuzana', age: 26, address: 'Hlavna 45', city: 'Kosice', zipcode: '040 01'},
    { name: 'David', age: 39, address: 'Palisady 3', city: 'Bratislava', zipcode: '811 06'},
    { name: 'Eva', age: 33, address: 'Krizna 7', city: 'Zilina', zipcode: '010 01'},
    { name: 'Daniel', age: 50, address: 'Hlavna 18', city: 'Presov', zipcode: '080 01'},
    { name: 'Olga', age: 22, address: 'Námestie SNP 2', city: 'Bratislava', zipcode: '811 01'},
    { name: 'Miroslav', age: 41, address: 'Lazaretska 12', city: 'Banska Bystrica', zipcode: '974 01'},
    { name: 'Lucia', age: 29, address: 'Hlavna 8', city: 'Kosice', zipcode: '040 01'}
];

const personsFilter = persons.filter(person => person.age > 30);

personsFilter.forEach(person => {
    console.log(`${person.name} lives in ${person.city}`);
})

console.log('')
console.log('')
console.log('')


// Bonus Task 
// Vytvořte program, který najde všechna prvočísla v rozsahu zadaném uživatelem.
// Pomocí cyklů vypište každé prvočíslo v rozsahu.


const primes =[];
let number = 2;

while (primes.length < 10){
    let isPrime= true;

   for(let i = 2; i<= Math.sqrt(number); i++){
        if (number % i=== 0){
            isPrime =false;
            break;
        }
   }
   if (isPrime) {
        primes.push(number);
    }
    number++
}
console.log(primes)