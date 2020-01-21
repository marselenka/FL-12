class Fighter {
    constructor(fighter) {
        this.name = fighter.name;
        this.damage = fighter.damage;
        this.hp = fighter.hp;
        this.strength = fighter.strength;
        this.agility = fighter.agility;
        this.wins = 0;
        this.losses = 0;
        this.max = 100;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage;
    }

    getStrength() {
        return this.strength;
    }

    getAgility() {
        return this.agility;
    }

    getHealth() {
        return this.hp;
    }

    attack(defender) {
        let randomPow = Math.floor(Math.random() * (this.max + 1));
        let attackChance = this.max - (defender.getStrength() + defender.getAgility());
        if (attackChance > randomPow) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.losses} `);
    }

    heal(health) {
        if (this.hp + health > this.max) {
            this.hp = this.max;
        } else {
            this.hp += health;
        }
        return this.hp;
    }

    dealDamage(damage) {
        if (this.hp - damage > 0) {
            this.hp -= damage;
        } else {
            this.hp = 0;
        }
        return this.hp;
    }

    addWin() {
        this.wins++;
    }

    addLoss() {
        this.losses++;
    }
}

const battle = (fighter1, fighter2) => {
    if (!fighter1.getHealth()) {
        console.log(`${fighter1.getName()} is dead and can't fight.`);
        return;
    }

    if (!fighter2.getHealth()) {
        console.log(`${fighter2.getName()} is dead and can't fight.`);
        return;
    }
    while (fighter1.getHealth > 0 && fighter2.getHealth() > 0) {
        fighter1.attack(fighter2);
        if (fighter2.getHealth() === 0) {
            fighter1.addWin();
            fighter2.addLoss();
            console.log(`${fighter1.getName()} has won!`);
            return;
        }

        fighter2.attack(fighter1);
        if (fighter1.getHealth() === 0) {
            fighter1.addLoss();
            fighter2.addWin();
            console.log(`${fighter2.getName()} has won!`);
            return;
        }
    }
};