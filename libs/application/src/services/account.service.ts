import { SendMoneyCommand } from "~input-ports/send-money.command";
import { SendMoneyInputPort } from "~input-ports/send-money.input";
import { LoadAccountOutputPort } from "~output-ports/load-account.output";
import { SendMoneyTransactionOutputPort } from "~output-ports/send-money-transaction.output";

export class AccountService implements SendMoneyInputPort {
  constructor(
    private readonly sendMoneyPort: SendMoneyTransactionOutputPort,
    private readonly loadAccountPort: LoadAccountOutputPort
  ) {}

  send(command: SendMoneyCommand): Promise<void> {
    const [error, sendMoneyCommand] = SendMoneyCommand.create(command);
    if (error) {
      throw new Error(error);
    }
    const accountsLoading = Promise.all([
      this.loadAccountPort.load(sendMoneyCommand!.sourceId),
      this.loadAccountPort.load(sendMoneyCommand!.targetId),
    ]);
    return accountsLoading.then(([sourceAccount, targetAccount]) => {
      sourceAccount.subtract(command.amount);
      targetAccount.plus(command.amount);
      this.sendMoneyPort.transaction(sourceAccount, targetAccount);
    });
  }
}
