

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


