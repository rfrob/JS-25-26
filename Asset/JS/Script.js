/*console.log("Hello World");

//var a = 5; // a ne plus utiliser
/*const a = 5;
let b = 5;
alert(a > b);



let age = 43; //number
let nom = "Robi";//chaine de caractère
let majeur = true; //boolean
const pi = 3.14; //constante*/

/*let annee = 2025;
const adn = 1981;
let age = (annee - adn);
console.log(`J'ai ${age} ans.`);*/

/*let femme = 5;
let homme = 10;
console.log(femme == homme);
console.log(femme != homme);
console.log(femme > homme);
console.log(femme < homme);*/

/*let compteur = 0;
let resultat= compteur+1;
console.log(resultat);*/

/*let age = 43;

if (age >= 18) {
    alert ("Vous êtes majeur");
}
else {
    alert ("Vous êtes mineur");
}*/

let monTableau = [];
let monTableau1 = ["Rouge", "Bleu", "Vert"];

let fruits = ["Pomme", "Banane", "Orange"];
let informations = ["Robi", 43 , true]; /* let <mixte>*/

console.log(informations[0]); // Robi
console.log(fruits.length);

let couleurs=["Rouge", "Bleu", "Vert"];
couleurs[1] = "Jaune";
console.log(couleurs);


let notes = [0,5,8,15,18,25];
notes.push(40); //ajoute un élément à la fin du tableau
notes.pop(); //supprime le dernier élément du tableau
notes.shift(); //supprime le premier élément du tableauf
notes.unshift(5); //ajoute un élément au début du tableau

let animaux = ["Chien", "Chat", "Oiseau"];
for (let animal of animaux) { /* for of pour chaque élément du tableau */
    console.log("j'ai un " + animal);
}

let prix = [10, 20, 30];
prix.forEach(function(prix) { /* for each pour chaque élément du tableau */
  console.log("le prix est de " + prix + "€")
});



let nombres = [1, 2, 3, 4, 5];
let Carres = nombres.map(function(nombre) { /* map pour chaque élément du tableau et retourne un nouveau tableau */
  return nombre * nombre;
});
console.log(Carres);

let bonnesNotes = notes.filter(function(note) { /* filter pour chaque élément du tableau et retourne un nouveau tableau avec les éléments qui remplissent la condition */
  return note >= 10;
});
console.log(bonnesNotes);


// DOM - Document Object Model

const tousLesLi = document.querySelectorAll('ul li');
tousLesLi.forEach(item => {
    console.log(item);
})
console.log(tousLesLi);


const monTitre = document.querySelector('h1');
monTitre.textContent = "Nouveau titre modifié par JS";
//monTitre.innerHTML= "<strong>salut</strong>";
monTitre.style.color = "green";
monTitre.style.backgroundColor = "lightgreen";
monTitre.classList.add("titre");
monTitre.classList.remove("titre");
monTitre.classList.toggle("titre");


