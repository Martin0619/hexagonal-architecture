import cors from "cors";
import type { Application } from "express";
import express from "express";
import type { ExpressServer, Logger, Routable } from "~types";

type Props = {
  appRouter: Routable;
  port?: number;
  globalPrefix?: string;
  logger: Logger;
};

export class ExpressServerImpl implements ExpressServer {
  public readonly app: Application;
  private readonly appRouter: Props["appRouter"];
  private readonly port: number;
  private readonly globalPrefix: string;
  private readonly log: Props["logger"];

  constructor(props: Props) {
    this.app = express();
    this.port = props.port ?? 8083;
    this.appRouter = props.appRouter;
    this.globalPrefix = props.globalPrefix ?? "api";
    this.log = props.logger;
  }

  start(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use("/" + this.globalPrefix, this.appRouter.routes);
    this.app.listen(this.port, () => {
      this.log.info(
        `Application is running on http://localhost:${this.port}/${this.globalPrefix}`
      );
    });
  }
}
