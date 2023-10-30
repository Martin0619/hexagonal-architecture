import { container } from "~config/di-container";
import { ExpressServer } from "~types";

const server = container.resolve<ExpressServer>("server");

server.start();
