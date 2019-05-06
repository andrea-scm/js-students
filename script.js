// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var studente = {
  "nome" : "Andrea",
  "cognome" : "Scimitto",
  "età" : "22"
};

for (var field in studente) {
  console.log(studente[field]);
}

var studenti = [
  {
    "nome" : "Andrea",
    "cognome" : "Scimitto",
    "età" : "22"
  },
  {
    "nome" : "Umberto",
    "cognome" : "Scimitto",
    "età" : "25"
  },
  {
    "nome" : "Luca",
    "cognome" : "Bianchi",
    "età" : "24"
  }
];
console.log("Studenti: ");
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome +" "+ studenti[i].cognome);
}

var nuovo_studente = {
  "nome" : prompt("Inserisci un nome: "),
  "cognome" : prompt("Inserisci un cognome: "),
  "età" : prompt("Inserisci l'età: ")
}
studenti.push(nuovo_studente)

console.log("Nuovi studenti: ");
console.log(studenti);
