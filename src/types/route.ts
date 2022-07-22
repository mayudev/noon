import { Application, Request, Response } from "express";

export default abstract class Route {
  constructor(app: Application, path: string) {
    app.get(path, (req, res) => this.run(req, res));
  }

  abstract run(req: Request, res: Response): Response | Promise<Response>;
}
