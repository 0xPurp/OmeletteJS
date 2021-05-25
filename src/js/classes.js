class Personne {
    constructor(nom, lieu, argent) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = [];
        this.mainGauche = [];


        this.seDeplacer = (depart, destination) => {
            destination.personnes.push(this);
            depart.personnes.splice(depart.personnes.indexOf(this), 1);
            this.lieu = destination;
            console.log(`${this.nom} est actuellement à ${this.lieu.nom}`);
        }


        this.couper = () => {
            bol.contenu.forEach(element => {
                couteau.couper(element);
            });
        }


        this.melanger = (melange) => {
            bol.melanger(melange);
        }


        this.prendrePanier = (endroit) => {
            if (endroit.nom == 'Epicerie') {
                this.mainDroite.push(endroit.bacPaniers.shift());
                console.log(`${this.nom} as pris ${this.mainDroite[0].type}`);
            }
        }


        this.rendrePanier = (endroit) => {
            if (endroit.nom == "Epicerie") {
                endroit.bacPaniers.push(this.mainDroite.shift());
                console.log(`${this.nom} as rendu son panier`)
            }
        }
        this.acheter = (endroit) => {
            if (endroit.nom == "Epicerie") {
                endroit.ingredients.forEach(element => {
                    this.mainDroite[0].contenu.push(element);
                    this.argent -= element.prix;
                    console.log(`${this.nom} avez acheter ${element.nom} à ${element.prix}€`);
                });
            } else {
                console.log(`${this.nom} n'est pas dans une Epicerie.`);
            }
        }


        this.vider = () => {
            while (this.mainDroite[0].contenu.length > 0) {
                console.log(`${this.nom} avez ajouté ${this.mainDroite[0].contenu[0].nom}`);
                bol.contenu.push(this.mainDroite[0].contenu.shift());
            }
        }

        
        this.viderBol = () => {
            poele.contenu.push(bol.contenu.shift());
            console.log(`${this.nom} vide le bol dans la poele`);
        }
    }
}

class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}


export { Personne, Lieu, Ingredients };