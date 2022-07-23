import { apiRequest } from "../helpers/api";
import { paths } from "../helpers/paths";
import { Chapter } from "../types/chapter";
import { MangaDexImagesResponse } from "../types/response";

export async function getChapterDetails(id: string) {
  const chapter = await apiRequest<Chapter>(
    paths.chapterDetails.with(id, {
      includes: ["manga"],
    })
  );

  return chapter;
}

export async function getChapterImages(id: string) {
  const images = await apiRequest(paths.chapterImages.with(id, {}));

  return images as MangaDexImagesResponse;
}
