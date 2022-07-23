import { Request, Response } from "express";
import { getChapterDetails, getChapterImages } from "../api/chapter";
import { getImageUrl } from "../helpers/images";
import { MangaDexError } from "../types/error";
import Route from "../types/route";

export class ChapterRoute extends Route {
  async run(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (id.length === 0) return res.send(400);

      const [details, images] = await Promise.all([
        getChapterDetails(id),
        getChapterImages(id),
      ]);

      let dummyPage = `
<h1>${details.data?.attributes.title}</h1>

<div>
`;

      const base = images.baseUrl;
      const hash = images.chapter.hash;

      images.chapter?.data.forEach((image) => {
        const url = getImageUrl(base, hash, image);
        dummyPage += `
        <img src="${url}" height=200 />
      `;
      });

      return res.send(dummyPage);
    } catch (e) {
      if (e instanceof MangaDexError) {
        return res.sendStatus(Number(e.message));
      } else {
        return res.sendStatus(500);
      }
    }
  }
}
