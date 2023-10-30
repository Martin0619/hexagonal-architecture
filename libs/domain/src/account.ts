export class Account {
  constructor(public id: number, public amount: number) {}

  plus(amount: number) {
    this.amount += amount;
  }

  subtract(amount: number) {
    if (amount > this.amount) {
      throw new Error("Source account does not have enough balance");
    }
    this.amount -= amount;
  }
}
