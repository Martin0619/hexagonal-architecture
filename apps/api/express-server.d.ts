import type { Application, Router } from "express";

export interface Routable {
  routes: Router;
}

export interface Logger {
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

export interface ExpressServer {
  app: Application;
  start: () => void;
}
