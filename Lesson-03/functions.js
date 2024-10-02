/*1.Vytvořte funkci transformFahrenheitToCelsius, která přijímá teplotu ve stupních
  Fahrenheit a vrací ekvivalentní teplotu v stupních Celsius.
  ○ Vytvořte funkci transformCelsiusToFahrenheit, která provádí opačnou konverzi.
*/
console.log(`1.TransformFahrenheitToCelsius`)
console.log(``)

/*const fahrenheitValue = 48;
const transformFahrenheitToCelsius = (fahrenheitValue) => {
    return (fahrenheitValue - 32) * 5 / 9;
}
const celsius = transformFahrenheitToCelsius(fahrenheitValue);
console.log(`Fahrenheit to Celsius is ${celsius.toFixed(2)}°C`)
*/

const fahrenheitValue = 48;
const transformFahrenheitToCelsius = (fahrenheitValue) => {
    return Math.round(fahrenheitValue - 32) * 5 / 9;
}
const celsius = transformFahrenheitToCelsius(fahrenheitValue);
console.log(`Fahrenheit to Celsius is ${celsius}°C`)


const celsiusValue = 9;
const transformCelsiusToFahrenheit=(celsiusValue) =>{
    return Math.round(celsiusValue * 9/5) + 32;
}
const fahrenheit = (transformCelsiusToFahrenheit(celsiusValue));
console.log(`Celsius to Fahrenheit is ${fahrenheit}°F`)

/*  2.Rest Parametry a Spread Operátor:
○ Napište funkci biggestNumber, která používá rest parametry k přijetí
libovolného počtu argumentů a vrací největší z nich.
○ Pomocí spread operátoru spojte dvě pole čísel a použijte funkci
biggestNumber pro zjištění největšího čísla v nově vytvořeném poli.
*/
console.log(``)
console.log(`2.Rest Parametry a Spread operator`)

const biggestNumber =(...numbers)=>{
    return Math.max(...numbers);
}
const array = [9,3,54,12,867,98,6];
const array2 = [8,43,365,9,793];

const bothArray = [...array,...array2];

/*const biggestNumOfFirstArray = biggestNumber(...array); 
const biggestNumOfSecondArray = biggestNumber(...array2); 
*/
const biggestNum = biggestNumber(...bothArray); 
console.log(``)

console.log(biggestNumber(9,3,54,12,867,98,6));
console.log(biggestNumber(8,43,365,9,793));

/*console.log(`The biggest number of first array is: ${biggestNumOfFirstArray}`)
console.log(`The biggest number of second array is: ${biggestNumOfSecondArray}`)
*/
console.log(`The biggest number of both arrays is: ${biggestNum}`)



/*  Arrow Funkce a Implicitní Return:
Přepište obě funkce z prvního úkolu (pro konverzi teplot) jako arrow funkce s
implicitním returnem. Odevzdejte na github obě verze.*/
console.log(``)
console.log(`3.Arrow Funkce a Implicitní Return`)
console.log(``)

const fahrenheitValues = 48;
const transformFahrenheitValue = (fahrenheitValues) => Math.round(fahrenheitValues - 32) * 5 / 9;
const celsiuss = transformFahrenheitValue(fahrenheitValues);
console.log(`Fahrenheit to Celsius is ${celsiuss}°C`)

const celsiusValues = 9;
const transformCelsiusValue=(celsiusValues) => Math.round(celsiusValues * 9/5) + 32;
const fahrenheits = (transformCelsiusValue(celsiusValues));
console.log(`Celsius to Fahrenheit is ${fahrenheits}°F`)

/*  Funkce Vyššího Řádu:
Napište funkci vyššího řádu modifyArray, která přijme pole a transformační
funkci jako argumenty. Transformační funkce by měla být aplikována na
každý prvek pole a modifyArray by mělo vracet nové pole s transformovanými
prvky.*/

console.log(``)
console.log(`4.Funkce Vyššího Řádu`)
console.log(``)

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const result = numbers.filter ((x) =>x % 2 ===0 );
console.log(result);
console.log(``);


const modifyArray = (array,transformFuntion) => {
    return array.map(transformFuntion);
}
//const numm = [1,2,3,4,5,9];
const squareRootOfTwo =(result)=> Math.sqrt(result);
const transformedArray = modifyArray(result,squareRootOfTwo);

console.log(transformedArray);


console.log("\n\n");