// nasz wczesniej utworzony produkt
const sukienka = {
  nazwa: 'Sukienka',
  cena: 30.0,
  kategoria: 'Odziez'
};
// inny produkt
const pilka = {
  nazwa: 'Pilka Najki',
  cena: 60.0,
  kategoria: 'Sport'
};

if (sukienka.kategoria === "Odziez") {
  // wciecie
  console.log("Miłego noszenia!");
}

const koszyk = [sukienka, pilka, sukienka, pilka, sukienka, pilka];

console.log(koszyk);

let i = 0;
while (i < koszyk.length) {
  console.log(koszyk[i].nazwa);
  i += 1;
}

for (let i = 0; i < koszyk.length; i++) { // i++ <=> i +=1  <=> i = i + 1
  console.log(koszyk[i].nazwa);
  // ++i, i--
}

const losoweLiczby = [];
let liczbaBrakujacychLementowWTablicy = 20;
while (liczbaBrakujacychLementowWTablicy-- > 0) {
  losoweLiczby.push(Math.floor(100*Math.random()));
}

console.log(losoweLiczby);

// poszukiwanie maksymalnej wartoswci
let maksymalnaWartosc = losoweLiczby[0];
for (let k = 0; k < losoweLiczby.length; k++) {
    if (maksymalnaWartosc < losoweLiczby[k]) {
      maksymalnaWartosc = losoweLiczby[k];
    }
}

console.log(maksymalnaWartosc);


// wartosc naszego koszyka?
let sumaKoszyka = 0;
for (let l = 0; l< koszyk.length; l++) {
  sumaKoszyka += koszyk[l].cena;
}
console.log("Wartosc koszyka to " + sumaKoszyka);


// suma ciagu arytmeycznego

let elementCiagu = 1;
let dlugosc = 6;
let suma = 0;
while (elementCiagu <= dlugosc) {
  suma += elementCiagu;
  elementCiagu++;
}

console.log(suma);
