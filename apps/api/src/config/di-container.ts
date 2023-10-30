import {
  AccountService,
  LoadAccountOutputPort,
  UpdateAccountOutputPort,
} from "@moneytransfer/application";
import { AccountInMemoryRepository } from "@moneytransfer/persistence";
import { asClass, asFunction, asValue, createContainer } from "awilix";
import { AccountController } from "src/account/account.controller";
import { AccountRouter } from "src/account/account.routes";
import { AppRouter } from "src/app.routes";
import { Logger } from "~types";
import { ExpressServerImpl } from "../server";

export const container = createContainer();

// environment variables
container.register("port", asValue(process.env.API_PORT));
container.register("globalPrefix", asValue(process.env.API_GLOBAL_PREFIX));

// others
container.register<Logger>(
  "logger",
  asValue({
    info: console.log,
    warn: console.log,
    error: console.log,
  })
);

// output ports (repositories)
container.register<LoadAccountOutputPort>(
  "loadAccountOutPort",
  asClass(AccountInMemoryRepository)
);
container.register<UpdateAccountOutputPort>(
  "sendMoneyOutPort",
  asClass(AccountInMemoryRepository)
);

// input ports (services)
container.register(
  "accountService",
  asFunction((c) => new AccountService(c.loadAccountOutPort, c.sendMoneyOutPort))
);

// controllers
container
  .register("accountController", asClass(AccountController).singleton())
  .register("accountRouter", asClass(AccountRouter).singleton());

// express
container.register("server", asClass(ExpressServerImpl).singleton());
container.register("appRouter", asClass(AppRouter).singleton());
