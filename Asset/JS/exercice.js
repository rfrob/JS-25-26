
/*
let ageVisiteur = parseInt(prompt("Quel âge avez-vous ?"));
console.log(ageVisiteur);
let prixAdulte = 12;
let prixEnfant = 6;
let prixBebe = "gratuit";

if (ageVisiteur > 12) {
  alert("Le prix est " + prixAdulte + "€");

}  
else if (ageVisiteur > 5 && ageVisiteur <= 12) {
  alert("Le prix est " + prixEnfant + "€");
} 
else {
  alert("votre entrée est " + prixBebe);
}
  */
 //let ageVisiteur = parseInt(prompt("Quel âge avez-vous ?"));
 //console.log(typeof ageVisiteur);


/*while (condition) {
  // code à executer tant que la condition est vraie

}*/

function decompte(n){
  if (n === 0) {
    console.log("Décollage !");
    return;
  }
  console.log(n);
  decompte(n - 1);
}
decompte(5);


function factorielle(n) {
  if (n === 0) {
    return 1;
  }
  else {
    return n * factorielle(n - 1);
  }
}
  let resultat = factorielle(5);
  console.log(resultat);




