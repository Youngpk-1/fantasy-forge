class Monster {
    name: string;
    health: number;
    damage: number;

    constructor(name: string, health: number, damage: number ) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    roar() {
        console.log (`${this.name} makes a loud scary roar`)
    }

    attack(target: {name:string; receiveDamage: (amoumt:number )=>void}) {
        console.log(`${this.name} bites ${target.name} for ${this.damage} damage!`);
        target.receiveDamage(this.damage)
        
}}
    export { Monster };

