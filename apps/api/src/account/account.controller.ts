import { AccountService, SendMoneyCommand } from "@moneytransfer/application";
import { Handler } from "express";

type Props = {
  readonly accountService: AccountService;
};

export class AccountController {
  private readonly accountService: AccountService;

  constructor(props: Props) {
    this.accountService = props.accountService;
  }

  transfer: Handler = (req, res) => {
    const [error, command] = SendMoneyCommand.create(req.body);
    if (!command) {
      return res.status(400).json({ error });
    }
    return this.accountService
      .send(command)
      .then(() => res.status(204).send())
      .catch((error: Error) => res.status(400).json({ error: error.message }));
  };
}
