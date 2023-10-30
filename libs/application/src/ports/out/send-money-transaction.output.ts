import { Account } from "@moneytransfer/domain";

export interface SendMoneyTransactionOutputPort {
  transaction: (source: Account, target: Account) => Promise<void>;
}
