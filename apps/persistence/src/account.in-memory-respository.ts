import {
  LoadAccountOutputPort,
  SendMoneyTransactionOutputPort,
  UpdateAccountOutputPort,
} from "@moneytransfer/application";
import { Account } from "@moneytransfer/domain";

export class AccountInMemoryRepository
  implements
    LoadAccountOutputPort,
    UpdateAccountOutputPort,
    SendMoneyTransactionOutputPort
{
  private readonly accounts: Account[];

  constructor() {
    this.accounts = [
      new Account(1, 50),
      new Account(2, 55),
      new Account(3, 60),
      new Account(4, 65),
      new Account(5, 70),
      new Account(6, 75),
      new Account(7, 80),
      new Account(8, 85),
      new Account(9, 90),
      new Account(10, 100),
    ];
  }

  async transaction(source: Account, target: Account): Promise<void> {
    const sourceIndex = this.accounts.findIndex((a) => a.id === source.id);
    const targetIndex = this.accounts.findIndex((a) => a.id === target.id);
    if (sourceIndex < 0 || targetIndex < 0) {
      throw new Error("Transaction failed. Make sure both of the ACCOUNTS exist");
    }
    this.accounts[sourceIndex] = source;
    this.accounts[targetIndex] = target;
  }

  load(id: number): Promise<Account> {
    return new Promise((resolve) => {
      const account = this.accounts.find((a) => a.id === id);
      if (!account) throw new Error("Account does not exist.");
      return resolve(account);
    });
  }

  update(_account: Account): Promise<void> {
    return Promise.resolve();
  }
}
