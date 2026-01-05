import { Adventurer } from "../models/Adventurer.ts";
import { HealPotion } from "../models/HealPotion.ts";

const hero = new Adventurer("Robin", 60);

// Create two potions
const smallPotion = new HealPotion("Small Healing Potion", 10, 2);
const bigPotion = new HealPotion("Big Healing Potion", 50, 1);

hero.receiveDamage(40);

smallPotion.use(hero);
smallPotion.use(hero);

console.log("\n--- After Using Potion ---");

// Log charges of bigPotion
console.log(`Big potion charges: ${bigPotion.charges}`);

// recharge testing
smallPotion.recharge(3);

// Use smallPotion again
smallPotion.use(hero);
