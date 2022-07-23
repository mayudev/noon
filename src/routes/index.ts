import { Application } from "express";
import { ChapterRoute } from "./chapter";
import { MangaRoute } from "./manga";

export function registerRoutes(app: Application) {
  new MangaRoute(app, "/manga/:id");
  new ChapterRoute(app, "/chapter/:id");
}
