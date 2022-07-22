import { Application } from "express";
import { MangaRoute } from "./manga";

export function registerRoutes(app: Application) {
  new MangaRoute(app, "/manga/:id");
}
