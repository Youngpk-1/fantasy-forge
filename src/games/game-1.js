import { Adventurer } from "../models/Adventurer.js";

console.log("Fantasy Forge initialized!");
// src/games/game-1.mjs

// Create a hero instance
const hero1 = new Adventurer("Robin", 80);
const hero2 = new Adventurer("Hattie",90)
console.log("---First Adventurer Created---");


// Call the scout method
hero1.scout();
hero2.scout();

export {};
