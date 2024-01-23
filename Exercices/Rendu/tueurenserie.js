const characteristics = {
  nerd: [0.3, 0.5, 0.2],
  sportif: [0.1, 0.8, 0.1],
  geek: [0.6, 0.2, 0.2],
  fêtard: [0.2, 0.2, 0.6],
  blonde: [0.3, 0.4, 0.3],
};

class Personnage {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
}

class Survivant {
  constructor(name, c) {
    this.name = name;
    this.characteristic = characteristics[c];
    this.probabilityType = this.characteristic[0];
    this.probabilityMort = this.characteristic[1];
    this.probabilityEsquive = this.characteristic[2];
    this.probabilitySacrifice = this.characteristic[3];
    this.hp = Math.floor(Math.random() * (100 - 50) + 50);
  }
}

const characters = [
  "Thomas",
  "Julien",
  "Alexandre",
  "Mickael",
  "Alice",
  "Marie",
  "Elodie",
  "Laura",
  "Coralie",
  "Céline",
  "Pauline",
  "Mathilde",
  "Julie",
  "Raphaël",
  "Nicolas",
  "Guillaume",
  "Jean",
  "Pierre",
  "Paul",
];

let survivants = [];
let morts = [];

for (let i = 0; i < 5; i++) {
  let m = Math.floor(Math.random() * characters.length);
  const randomCharactereristic =
    Object.keys(characteristics)[
      Math.floor(Math.random() * Object.keys(characteristics).length)
    ];
  console.log(characters[m], randomCharactereristic);
  survivants.push(new Survivant(characters[m], randomCharactereristic));
  characters.splice(m, 1);
}
console.log(survivants);

const jason = new Personnage("Jason", 150);

while (jason.hp > 0 && survivants.length > 0) {
  const randNumber = Math.random();
  let c = Math.floor(Math.random() * survivants.length);
  console.log(`Jason attaque ${survivants[c].name}`);
  survivants[c].hp -= 10;
  if (survivants[c].hp <= 0) {
    console.log(
      `${survivants[c].name} est mort, il avait ${survivants[c].hp} hp`
    );
    morts.push(survivants[c].name);
    survivants.splice(c, 1);
    console.log("Il reste " + survivants.length + " survivants");
  } else if (survivants[c].probabilityEsquive > randNumber) {
    console.log(`${survivants[c].name} a esquivé`);
    jason.hp -= 10;
    survivants[c].hp += 10;
    console.log(`Il reste ${jason.hp} hp à Jason`);
    if (jason.hp <= 0) {
      console.log("Jason est mort, fin de la partie");
      break;
    } else if (survivants[c].probabilitySacrifice > randNumber) {
      console.log(`${survivants[c].name} s'est sacrifié`);
      jason.hp -= 15;
      console.log(`Il reste ${jason.hp} hp à Jason`);
      console.log(`${survivants[c].name} est mort`);
      morts.push(survivants[c].name);
      survivants.splice(c, 1);
      console.log("Il reste " + survivants.length + " survivants");
      if (jason.hp <= 0) {
        console.log("Jason est mort, fin de partie");
        break;
      }
    }
  }
  if (survivants.length === 0) {
    morts.forEach((m) => {
      console.log(m + " est mort");
    });
    console.log("Jason a tué tout le monde, fin de partie");
    break;
  } else if (
    jason.hp > 0 &&
    survivants.length > 0 &&
    survivants[c] &&
    survivants[c].hp > 0
  ) {
    console.log(`${survivants[c].name} a ${survivants[c].hp} hp`);
  }
  console.log("Jason choisit sa prochaine victime");
}

console.log("La partie est terminée.");