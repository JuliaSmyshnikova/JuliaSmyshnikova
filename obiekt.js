 // nasz pierwszy obiekt

// posiada tylko pola!
const produkt = {
  nazwa: 'Sukienka',
  cena: 30.0,
  kategoria: 'Odziez'
};

console.log(produkt);

// pobranie nazwy
console.log(produkt.nazwa);

let poleNazwa =  'nazwa';
console.log(produkt[poleNazwa]);

// zmiana wartosci
produkt.cena = 29.99;
console.log(produkt);


produkt['cena'] = 29.98;
console.log(produkt);
