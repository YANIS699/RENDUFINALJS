

fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json')
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
    const paragrapheAvis=document.createElement("p");
    paragrapheAvis.textContent=avis;
    containerAvis.appendChild(paragrapheAvis);
});
let produit=sneakers.produits;

produit.forEach(produit => {
 const containerProduits=document.getElementById("containerProduits");
 const nomProduit=document.createElement("h3");
 nomProduit=textContent=produit;
     
});




    });




