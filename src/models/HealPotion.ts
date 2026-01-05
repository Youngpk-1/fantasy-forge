class HealPotion {
  name: string;
  healAmount: number;
  charges: number;


  constructor(name: string, healAmount: number, charges: number) {
    this.name = name;
    this.healAmount = healAmount;
    this.charges = charges;
  }

  use(target: {name: string; heal: (amount:number) => void}) {
    if (this.charges > 0) {
      this.charges--;
      target.heal(this.healAmount);
      console.log(
        `${this.name} used on ${target.name}, (${this.charges} charges left)`
      );
    } else {
      console.log(`${this.name} is out of charges!`);
    }
  }

  recharge(amount:number) {
    this.charges += amount;
    console.log(`${this.name} recharged! New charges: ${this.charges}`);
  }
}

export { HealPotion };
