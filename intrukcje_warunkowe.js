
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

const koszyk = [];
koszyk.push(sukienka, pilka, sukienka, pilka, sukienka, pilka);
if (!koszyk.length) {
  console.log("Hej, masz pusty koszyk!");
} else if (koszyk.length == 1) {
  console.log("Hej, masz 1 przedmiot w koszyku");
} else if (koszyk.length < 5 ){
  console.log("Hej, masz " + koszyk.length + " przedmioty w koszyku");
} else {
  console.log("Hej, masz " + koszyk.length + " przedmiotów w koszyku");
}
