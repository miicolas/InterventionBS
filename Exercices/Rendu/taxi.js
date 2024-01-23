class Personnage {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
}

class Trajet {
    constructor () {
        this.music = null;
        this.changeTaxi = 0;
        this.fire = 30;
    }
}

playlist = ["Anissa - Wejdene", "Bande organisée - Jul", "Bella Ciao - La Casa de Papel", "Binks - Gambi", "C'est la vie - Kh"]


const personnage = new Personnage("John", 10);
const trajet = new Trajet();

while (trajet.fire > 0 && personnage.hp > 0) {
    trajet.music = playlist[Math.floor(Math.random() * playlist.length)];
    console.log(`La musique est ${trajet.music} au tour ${trajet.fire}`);
    if (trajet.music == "Anissa - Wejdene") {
        personnage.hp -- ; 
        trajet.changeTaxi ++;
        if (trajet.changeTaxi == 1) {
            console.log(`${personnage.name} a perdu 1hp et change de taxi pour la première fois.`);

        }
        else if (personnage.hp == 0){
            console.log(`${personnage.name} est mort après avoir trop écouter Anissa.`);
            console.log("Fin de la partie");
            break;
        }
        else {
            console.log(`${personnage.name} a ${personnage.hp} hp car Anissa passe à la radio. ${personnage.name} change de taxi, cela fait ${trajet.changeTaxi} fois qu'il change de taxi`);
        }
    }
    else {
        trajet.fire --;
        if (trajet.fire == 0){
            console.log(`${personnage.name} a survécu au trajet, il lui reste ${personnage.hp} hp`);
            console.log ("Fin de la partie");
            break
        }
    }
}