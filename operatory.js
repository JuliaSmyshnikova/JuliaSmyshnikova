// przypisanie

let a = 1;
console.log(a);

a += 1; // a = a + 1
console.log(a);
a *= 2; // a = a * 2
console.log(a);
a /= 2; // a = a / 2
console.log(a);
a -= 1; // a = a - 1
console.log(a);

let b = 1;
// operatory logiczne
console.log(b == 1); // prawda
console.log(b == 2); // falsz

console.log(b == '1'); // prawda
console.log(b === '1'); // fałsz

console.log( 1 > 2);
console.log( 2 >= 2);

// rozne
console.log( 1 != 2);
console.log( 1 != '1'); // falsz
console.log( 1 !== '1'); // prawda


// zlaczenie logiczne
let czyMa35Lat = true;
let czyMaSkonczoneStudia = false;
const czyMozeZostacPrezydentem = czyMa35Lat && czyMaSkonczoneStudia;
console.log(czyMozeZostacPrezydentem);

//
let skonczone18Lat = false;
let karteMotorower = true;
const czyMozeJezdzicSkuterem = skonczone18Lat || karteMotorower;
console.log(czyMozeJezdzicSkuterem);


const pustaTablica = [];
const czyTablicaJestPusta = !pustaTablica.length;
console.log(czyTablicaJestPusta);


// operatory
console.log(1 + 2);
console.log('1' + '2');

console.log(true + true);
console.log('1' + true);


console.log(1 - 2);
console.log((true - true) == false);

console.log('tekst' - 1);
console.log('1' - 1);

console.log('1' * 5);
console.log(5 * 'na');

console.log(11 % 5);
console.log(Math.floor(11 / 5));
