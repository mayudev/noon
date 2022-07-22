import { Request, Response } from "express";
import { apiRequest } from "../helpers/api";
import { findCoverURL } from "../helpers/covers";
import { paths } from "../helpers/paths";
import { MangaDexError } from "../types/error";
import { Manga } from "../types/manga";
import Route from "../types/route";

export class MangaRoute extends Route {
  async run(req: Request, res: Response) {
    const id = req.params.id;

    if (id.length === 0) return res.send(400);

    try {
      const details = await apiRequest<Manga>(
        paths.mangaDetails.with(id, "includes[]=cover_art")
      );

      const cover = findCoverURL(details.data!);

      console.log(cover);

      const respString = `
      <b>a</b>
  <img src=${cover} width="320" />
Manga title: ${details.data?.attributes.title.en};
      Tags: ${details.data?.attributes.tags.map((tag) => tag.attributes.name.en)}`;

      return res.send(respString);
    } catch (e) {
      if (e instanceof MangaDexError) {
        return res.sendStatus(Number(e.message));
      } else {
        return res.sendStatus(500); // TODO
      }
    }
  }
}