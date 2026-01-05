import { Adventurer } from "../models/Adventurer.js";

console.log("Fantasy Forge initialized!");
// src/games/game-1.mjs

// Create a hero instance
const hero1 = new Adventurer("Robin", 80);
const hero2 = new Adventurer("Hattie", 90);
console.log("---First Adventurer Created---");

// Call the scout method
hero1.scout();
hero2.scout();

console.log("\n--- Individual Actions ---");

//Robin
hero1.receiveDamage(15);
hero1.heal(10);

//Hattie
hero2.receiveDamage(20);
hero2.heal(15);

console.log("\n--- Final Health ---");

console.log(`${hero1.name} 's final health is: ${hero1.health}`);
console.log(`${hero2.name} 's final health is: ${hero2.health}`);

export {};
