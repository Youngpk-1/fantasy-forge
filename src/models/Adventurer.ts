// src/models/Adventurer.mjs

class Adventurer {

name: string;
health: number;


  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
    
  }

  receiveDamage(amount: number): void {
    this.health -= amount;
    console.log(`${this.name} received ${amount} damage. Current health: ${this.health}`);
  }

  heal(amount: number): void {
    this.health += amount;
    console.log(`${this.name} healed ${amount} health. Current health: ${this.health}`);
  }

  scout() {
    console.log(`${this.name} is scouting... Current health: ${this.health}`);
  }
}
export { Adventurer };
