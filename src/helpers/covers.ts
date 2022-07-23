import { Manga } from "../types/manga";
import { CoverArtAttributes } from "../types/misc";

export function findCoverFilename(manga: Manga): string | null {
  const artRelationship = manga.relationships.find(
    (relationship) => relationship.type === "cover_art"
  );

  if (artRelationship?.attributes)
    return (artRelationship.attributes as CoverArtAttributes).fileName;
  else return null;
}

const COVER_BASE = "https://uploads.mangadex.org/covers";

export function findCoverURL(manga: Manga): string | null {
  const filename = findCoverFilename(manga);
  if (!filename) return null;
  else return COVER_BASE + "/" + manga.id + "/" + filename;
}
