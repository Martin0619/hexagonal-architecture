import { Account } from "@moneytransfer/domain";

export interface UpdateAccountOutputPort {
  update(account: Account): Promise<void>;
}
