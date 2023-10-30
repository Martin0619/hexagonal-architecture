import { SendMoneyCommand } from "./send-money.command";

export interface SendMoneyInputPort {
  send(command: SendMoneyCommand): Promise<void>;
}
