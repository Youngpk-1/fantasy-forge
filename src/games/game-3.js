import { Adventurer } from "../models/Adventurer.js";
import { HealPotion } from "../models/HealPotion.js";

// Cast of Characters
const sirBrave = new Adventurer("Sir Brave", 100);
const orcWarrior = new Adventurer("Orc Warrior", 120);

// Heal potion
const flask = new HealPotion("Flask of Red Goo", 30, 2);

// Scene: Starting health
console.log(`Starting Health:`);
console.log(`${sirBrave.name}: ${sirBrave.health}`);
console.log(`${orcWarrior.name}: ${orcWarrior.health}`);
console.log("---");

// Action: Orc attacks Sir Brave
orcWarrior.receiveDamage(0);

sirBrave.receiveDamage(40); // Orc hits Sir Brave

// Reaction: Sir Brave heals using the flask
flask.use(sirBrave);
console.log("---");

// Counter-Action: Sir Brave attacks Orc Warrior
orcWarrior.receiveDamage(50);

// Summary: Final health and remaining flask charges
console.log(`\n---Final Health:---`);
console.log(`${sirBrave.name}: ${sirBrave.health}`);
console.log(`${orcWarrior.name}: ${orcWarrior.health}`);
console.log(`Remaining charges of ${flask.name}: ${flask.charges}`);
