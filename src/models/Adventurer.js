// src/models/Adventurer.mjs

class Adventurer {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    
  }

  receiveDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} received ${amount} damage. Current health: ${this.health}`);
  }

  heal(amount) {
    this.health += amount;
    console.log(`${this.name} healed ${amount} health. Current health: ${this.health}`);
  }

  scout() {
    console.log(`${this.name} is scouting... Current health: ${this.health}`);
  }
}
export { Adventurer };
