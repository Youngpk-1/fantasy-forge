class Monster {
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    roar() {
        // TODO: Log a scary message using this.name
    }

    attack(target) {
        console.log(`${this.name} bites ${target.name} for ${this.damage} damage!`);
        // TODO: Apply damage to the target. 
        // Hint: target.receiveDamage(this.damage);
    }
}
export { Monster };

