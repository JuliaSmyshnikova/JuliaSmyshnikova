let temperaturaWMiescie = 20.5;
let temperaturaWMiescie2 = 21.8;


const wykazTemperatur = [];
console.log(wykazTemperatur);
wykazTemperatur.push(20.5);
console.log(wykazTemperatur);

/*
 * wykazTemperatur = -> miejsce w pameci
 */

 const nowyWykazTemperatur = [20.5, 21.8, 19.6];

// tablice indeksowane sa od 0

// pobranie 2 elementu
console.log(nowyWykazTemperatur[1]);


// pobranie 1 elementu
console.log(nowyWykazTemperatur[0]);

 // pobranie nieistniejacego elementu
console.log(nowyWykazTemperatur[3]);

// ile elementow jest w tablicy
console.log(nowyWykazTemperatur.length);

nowyWykazTemperatur[1] = 20.8;


console.log(nowyWykazTemperatur);

nowyWykazTemperatur.push(18.6);

console.log(nowyWykazTemperatur.length);

// podejrzenie ostatniego elementu
console.log(nowyWykazTemperatur[nowyWykazTemperatur.length - 1]);

// którego dnia temp = 19.6
const dzienZ19_6 = nowyWykazTemperatur.indexOf(19.6);
console.log(dzienZ19_6);
console.log(nowyWykazTemperatur[dzienZ19_6]); // powinno wypisac 19.6


// tablica na tekst
console.log(nowyWykazTemperatur.join(', '));
