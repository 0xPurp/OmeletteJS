import {maison,epicerie,perso,bol,poele,nullePart} from './objects.js';

nullePart.personnes.push(perso);
perso.lieu = nullePart;

perso.seDeplacer(nullePart, maison);
perso.seDeplacer(maison, epicerie);

perso.prendrePanier(epicerie);

perso.acheter(epicerie);

perso.seDeplacer(epicerie, maison);

perso.vider();

perso.seDeplacer(maison,epicerie);

perso.rendrePanier(epicerie);

perso.seDeplacer(epicerie, maison);

perso.couper();

perso.melanger('omelette');

perso.viderBol();

console.log(poele);

poele.cuir();

console.log(poele.contenu[0]);

setTimeout(()=> {
    console.log(poele.contenu[0]);
}, 5000);