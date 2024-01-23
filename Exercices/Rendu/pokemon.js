class Pokemon { 
    constructor (name, hp, attack, defense, luck) { 
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.luck = luck;
    }

    isLucky() { 
        return Math.random() < this.luck; 
    }

    attackPokemon (enemy) { 
        if (this.isLucky()){
            enemy.hp -= this.attack; 
            console.log(`${this.name} attaque ${enemy.name} et lui inflige ${this.attack} points de dégats`);
            console.log (`${enemy.name} a ${enemy.hp} points de vie restants`)

        }
        else {
            console.log(`${this.name} attaque ${enemy.name} mais rate son attaque`);
        }
    }
}
const pokemons = [
    new Pokemon("Pikachu", 35, 205, 40, 90, 0.1),
    new Pokemon("Bulbizarre", 350, 49, 49, 45, 0.4),
]

while (pokemons[0].hp > 0 && pokemons[1].hp > 0) { 
    pokemons[0].attackPokemon(pokemons[1]); 
    pokemons[1].attackPokemon(pokemons[0]);
    if (pokemons[0].hp <= 0) { 
        console.log(`${pokemons[0].name} est KO`);
    }
    else {
        console.log(`${pokemons[1].name} est KO`);
    }
}

