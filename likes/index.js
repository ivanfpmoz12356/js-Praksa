/*
Opis:
 Svima je poznat sustav "lajkanja" s Facebooka, Instagrama i drugih društvenih stranica. Ljudi mogu "lajkati" postove na blogu, slike ili druge stavke. 
 Potrebno je stvoriti tekst koji bi trebao biti prikazan pored takve stavke. 
 Implementirajte funkciju koja uzima niz koji sadrži imena ljudi kojima se neka stavka sviđa. 
 Funkcija mora vratiti tekst za prikaz kao što je prikazano u primjerima:

  Primjeri:

    likes [] //mora biti "no one likes this"
    likes ["Petar"] //mora biti "Petar likes this"
    likes ["Pero", "Ivan"] //mora biti "Pero and Ivan like this"
    likes ["Robert", "Marija", "Marko"] //mora biti "Robert, Marija and Marko like this"
    likes ["Ivan", "Pero", "Marko", "Robert"] //mora biti "Ivan, Pero and 2 others like this"

  Bilješke:
    Za više od 4 imena, broj unutar teksta "and 2 others" jednostavno se povećava.
*/

//----------------RJEŠENJE ZADATAKA ------------







//---------------------------------------------------

// Function Export
module.exports = likes