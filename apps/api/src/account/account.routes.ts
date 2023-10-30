import { Router } from "express";
import { AccountController } from "./account.controller";

type Props = {
  accountController: AccountController;
};

export class AccountRouter {
  private readonly accountController: AccountController;
  private readonly router;

  constructor(props: Props) {
    this.accountController = props.accountController;
    this.router = Router();
  }

  get routes(): Router {
    this.router.post("/accounts/transfer", this.accountController.transfer);

    return this.router;
  }
}
