type SendMoneyCommandParam = {
  sourceId: number;
  targetId: number;
  amount: number;
};

export class SendMoneyCommand {
  private constructor(
    public readonly sourceId: number,
    public readonly targetId: number,
    public readonly amount: number
  ) {}

  static create(command: SendMoneyCommandParam): [string?, SendMoneyCommand?] {
    // validate command arguments

    return [
      undefined,
      new SendMoneyCommand(command.sourceId, command.targetId, command.amount),
    ];
  }
}
