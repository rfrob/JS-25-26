let notes = prompt("Entrez vos notes séparées par des virgules :");
let tableauNotes = notes.split(",").map(Number); // Convertit les entrées en nombres
let Moyennes = (tableauNotes.reduce((a, b) => a + b, 0) / tableauNotes.length);
MoyenneSurVingt = (Moyennes / 100) * 20;

alert("Votre moyenne est de " + MoyenneSurVingt + " sur 20");