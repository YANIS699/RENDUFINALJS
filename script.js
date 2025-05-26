
function fetchshoes(url) {
    
fetch(url)
    .then(response => response.json())
    .then(sneakers => {
        const hero = document.getElementById("hero");

        const titre = document.createElement("h1");
        titre.textContent = sneakers.nomCommercial;

        const phrase = document.createElement("h2")
        phrase.textContent = sneakers.phraseAccroche

        const bouton = document.createElement("button");
        bouton.textContent = sneakers.texteAppelAction;

    hero.appendChild(titre);
    hero.appendChild(phrase);
    hero.appendChild(bouton);

let avantageClient = sneakers.avantagesClients;
    
    
avantageClient.forEach(avis => {
    const containerAvis = document.getElementById("containerAvis");
    const ParaAvis = document.createElement("p");
    ParaAvis.textContent=avis;
    containerAvis.appendChild(ParaAvis);


});
let produit =sneakers.produits;

produit.forEach(Element => {
const containerProduits=document.getElementById("containerProduits");

const card = document.createElement("div");
const nomProduit =document.createElement("h3");
const descriptionproduit=document.createElement("p");
const imageproduit=document.createElement("img");

nomProduit.textContent=Element.nom;
descriptionproduit.textContent=Element.description;
imageproduit.src=Element["image-url"]; 

card.appendChild(imageproduit);
card.appendChild(nomProduit);
card.appendChild(descriptionproduit);
containerProduits.appendChild(card);


let services=sneakers.services;
services.forEach(element => {
    
const containerServices=document.getElementById("containerServices");
const cardServices=document.createElement("div");
const personnalisationservices=document.createElement("h2");
const ÉvénementsResponsables=document.createElement("p");
const recyclage=document.createElement("h3");

cardServices.appendChild(personnalisationservices);
cardServices.appendChild(ÉvénementsResponsables);
cardServices.appendChild(recyclage);
containerServices.appendChild(cardServices);

recyclage.textContent=element.description;
personnalisationservices.textContent=element.nom;






});


});

    })
 .catch(error => {
    // ici on gère les erreurs
    console.error('Erreur lors du fetch :', error);
  });
}
fetchshoes("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json")



