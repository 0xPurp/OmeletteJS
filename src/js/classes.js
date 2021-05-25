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

        this.prendrePanier = (endroit) =>{
            if (endroit.nom == 'Epicerie') {
                this.mainDroite.push(endroit.bacPaniers.shift());
                console.log(`${this.nom} as pris ${this.mainDroite[0].type}`);
            }
        }
        
        this.rendrePanier = (endroit) => {
            irf (endroit.nom == "Epicerie") {
                endroit.bacPaniers.push(this.mainDroite.shift());
                console.log(`${this.nom} as rendu son panier`)
            }
        }
    }
}


export { Personne, Lieu, Ingredients };