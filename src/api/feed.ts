import { apiRequest } from "../helpers/api";
import { paths } from "../helpers/paths";
import { Chapter } from "../types/chapter";

export default async function getMangaFeed(id: string) {
  const feed = await apiRequest<Chapter[]>(
    paths.mangaDetails.with(
      id,
      {
        order: {
          chapter: "desc",
        },
      },
      "/feed"
    )
  );

  return feed;
}
