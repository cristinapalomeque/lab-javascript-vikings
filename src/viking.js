// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  genericAttack(attackArmy, defenseArmy) {
    const idxAttacker = Math.round(Math.random() * (attackArmy.length - 1));
    const chosenAttacker = attackArmy[idxAttacker];
    const idxDefender = Math.round(Math.random() * (defenseArmy.length - 1));
    const chosenDefender = defenseArmy[idxDefender];
    const damageText = chosenDefender.receiveDamage(chosenAttacker.strength);
    return damageText;
  }
  vikingAttack() {
    const message = this.genericAttack(this.vikingArmy, this.saxonArmy);
    this.saxonArmy = this.saxonArmy.filter((soldier) => soldier.health > 0);
    return message;
  }
  /*const idxViking = Math.round(Math.random() * (this.vikingArmy.length - 1));
    const chosenViking = this.vikingArmy[idxViking];
    const idxSaxon = Math.round(Math.random() * (this.saxonArmy.length - 1));
    const chosenSaxon = this.saxonArmy[idxSaxon];
    const damageText = chosenSaxon.receiveDamage(chosenViking.strength);
    this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);
    return damageText;*/

  saxonAttack() {
    const message = this.genericAttack(this.saxonArmy, this.vikingArmy);
    this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
    return message;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

const war = new War();
war.addSaxon(new Saxon(5, 4));
war.addSaxon(new Saxon(4, 3));
war.addViking(new Viking("Carles", 4, 4));
war.addViking(new Viking("Kris", 6, 6));
//console.log(war);
war.vikingAttack();
war.saxonAttack();
//console.log(war);

/*
// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const randomViking = Math.round(
      Math.random() * (this.vikingArmy.length - 1)
    );
    const viking = this.vikingArmy[randomViking];

    const randomSaxon = Math.round(Math.random() * (this.saxonArmy.length - 1));
    const saxon = this.saxonArmy[randomSaxon];

    const message = saxon.receiveDamage(viking.strength);
    this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);
    return message;
  }
  saxonAttack() {
    const randomViking = Math.round(
      Math.random() * (this.vikingArmy.length - 1)
    );
    const viking = this.vikingArmy[randomViking];

    const randomSaxon = Math.round(Math.random() * (this.saxonArmy.length - 1));
    const saxon = this.saxonArmy[randomSaxon];

    const message = viking.receiveDamage(saxon.strength);
    this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
    return message;
  }
  showStatus() {
    let message = "Vikings and Saxons are still in the thick of battle.";
    if (this.vikingArmy.length === 0) {
      message =
        "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length === 0) {
      message = "Vikings have won the war of the century!";
    }
    return message;
  }
}
*/
