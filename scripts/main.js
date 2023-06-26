class Creature {
    static #number = 0
    #id = 0;
    constructor(name, healthPoints, damage) {
        this.name = name,
            this.healthPoints = healthPoints;
        this.damage = damage;
        Creature.#number++;
        this.#id = Creature.#number;
    }
    getId() { return this.#id; }
    defeat() {
        console.log(`Существо:${this.name} уничтожено`);
    }

}
class Player extends Creature {
    #lvl = 0;
    constructor(name, healthPoints, damage) {
        super(name, healthPoints, damage);
    }
    attack(other) {
        other.healthPoints -= this.damage;
        if (other.healthPoints <= 0) { other.defeat(); this.#lvl++; return true; }
        else
            return false;
    }
    getLvl() { return this.#lvl; }
}

class Enemy extends Creature {
    #lvl = 0;
    constructor(name, healthPoints, damage) {
        super(name, healthPoints, damage);
    }
    attack(other) {
        other.healthPoints -= this.damage;
        if (other.healthPoints <= 0) { other.defeat(); this.#lvl++; return true; }
        else
            return false;
    }
    getLvl() { return this.#lvl; }
}

const player = new Player('Player', 200, 10);
const enemy = new Enemy('Enemy', 170, 10);

console.log(`${player.name}: helthPoint: ${player.healthPoints}, demage: ${player.damage}`);
console.log(`${enemy.name}: helthPoint: ${enemy.healthPoints}, demage: ${enemy.damage}`);
for (var i = 0; i < 100; i++) {

    console.log(`${player.name}: ${player.attack(enemy)}`);
   // console.log(`Атакует Player, осталось жизней у Enemy: ${enemy.healthPoints}`);
    console.log(`${enemy.name} : ${enemy.attack(player)}`);
    //console.log(`Атакует Enemy, осталось жизней у Player: ${player.healthPoints}`);
    if(player.healthPoints<=0 || enemy.healthPoints<=0){
        break;
    }
}
console.log(`Уровень Player: ${player.getLvl()}`);
console.log(`Уровень Enemy: ${enemy.getLvl()}`);

