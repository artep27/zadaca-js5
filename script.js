"use strict";

/* Zadatak 1 */

const racuni = [25, 55, 130, 97, 350, 109, 278, 67, 99, 299];
const napojnice = [];
const racuniTotal = [];

const racunNapojnice = (racun) => {
  let napojnica = racun >= 50 && racun <= 300 ? 0.15 * racun : 0.2 * racun;
  return napojnica;
};

for (let i = 0; i < racuni.length; i++) {
  napojnice.push(racunNapojnice(racuni[i]));
  racuniTotal.push(racuni[i] + racunNapojnice(racuni[i]));
}

console.log(napojnice);
console.log(racuniTotal);

/* Zadatak 2 */

const sumaProsjekListe = (lista) => {
  let suma = 0;
  let prosjek;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  prosjek = suma / lista.length;
  return prosjek;
};

const prosjekRacuna = sumaProsjekListe(racuni);
console.log(prosjekRacuna);

/* Zadatak 3 */

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2014 },
  { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2015 },
  { ime: "BMW", kategorija: "coupe", godinaProizvodnje: 2010 },
  { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2011 },
  { ime: "Peugeot", kategorija: "limuzina", godinaProizvodnje: 2018 },
  { ime: "Range Rover", kategorija: "jeep", godinaProizvodnje: 2017 },
];

const limuzine = auti.filter((auto) => {
  return auto.kategorija === "limuzina";
});
console.log(limuzine);

/* Zadatak 4 */

const kosarica = [
  { proizvod: "Bicikl", cijena: 1500 },
  { proizvod: "Frižider", cijena: 2500 },
  { proizvod: "Perilica", cijena: 2000 },
  { proizvod: "Romobil", cijena: 400 },
  { proizvod: "Auto", cijena: 100000 },
  { proizvod: "Tipkovnica", cijena: 100 },
];

let sumaCijena = 0;

const iznosKosarice = kosarica.reduce((sumaCijena, trenutniProizvod) => {
  sumaCijena += trenutniProizvod.cijena;
  return sumaCijena;
}, sumaCijena);

console.log(iznosKosarice);
