import { Adventurer } from '../models/Adventurer.ts';
import { Monster } from '../models/Monster.ts';

const hero = new Adventurer("Sir Brave", 100);
const goblinGrunt = new Monster ("Goblin Grunt", 80, 20)


console.log("--- A Monster Appears! ---");
// TODO: Make the monster roar
goblinGrunt.roar()
// TODO: Have the monster attack the hero
goblinGrunt.attack(hero)

// TODO: Have the hero attack the monster



