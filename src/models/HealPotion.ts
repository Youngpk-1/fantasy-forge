class HealPotion {
  constructor(name, healAmount, charges) {
    this.name = name;
    this.healAmount = healAmount;
    this.charges = charges;
  }

  use(target) {
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

  recharge(amount) {
    this.charges += amount;
    console.log(`${this.name} recharged! New charges: ${this.charges}`);
  }
}

export { HealPotion };
