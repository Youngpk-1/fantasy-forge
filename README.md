🛡️ Fantasy-Forge Adventure Game

A turn-based RPG-style game built with JavaScript classes. Players (Adventurers) can attack, take damage, and heal using potions. This project is perfect for learning object-oriented programming (OOP) in JavaScript.

✨ Features

🧝 Adventurer Class

Characters with name and health

Can take damage

🧪 HealPotion Class

Potions with name, healAmount, and charges

use(target) → heals a character

recharge(amount) → restores potion charges

🎮 Game Scenarios

game-1.js – Introductory scenario: basic adventurer actions and potion usage

game-2.js – Potion testing: multiple potions, independent charges, and recharge

game-3.js – Mini battle: attack, heal, counter-attack, and potion tracking

📁 File Structure
src/
├─ main-game.js # Entry point, runs a game scenario
├─ models/
│ ├─ Adventurer.js # Adventurer class
│ └─ HealPotion.js # HealPotion class
└─ games/
├─ game-1.js # Introductory scenario
├─ game-2.js # Potion testing game
└─ game-3.js # Mini battle game

🚀 Getting Started

Clone the repository

Navigate to the project folder

cd your-project-folder

Run a game scenario

node src/main-game.js

See the console output for attacks, healing, and potion charges.

🖥️ Example Output (game-3.js)
Starting Health:
Sir Brave: 100
Orc Warrior: 120

---

Sir Brave took 40 damage! Health now: 60
Sir Brave healed for 30! Charges left: 1

---

Orc Warrior took 50 damage! Health now: 70
Final Health:
Sir Brave: 90
Orc Warrior: 70
Remaining charges of Flask of Red Goo: 1

💡 Concepts Learned

JavaScript classes & constructors

Methods with parameters and state changes

Object-to-object interactions

Logging and debugging output

created by Isaac Watson
