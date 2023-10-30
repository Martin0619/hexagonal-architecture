import { Router } from "express";
import { Routable } from "~types";

type Props = {
  readonly accountRouter: Routable;
};

export class AppRouter implements Routable {
  constructor(private props: Props) {}

  get routes(): Router {
    const router = Router();

    router.use(this.props.accountRouter.routes);

    return router;
  }
}
