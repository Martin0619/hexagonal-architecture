import { Account } from "@moneytransfer/domain";

export interface LoadAccountOutputPort {
  load(id: number): Promise<Account>;
}
