import { Entity, LocalizedString, PublicationStatus, Relationship } from "./misc";
import { Tag } from "./tag";

export interface Manga {
  id: string;
  type: "manga";
  attributes: MangaAttributes;
  relationships: Relationship[];
}

export interface MangaAttributes extends Entity {
  title: LocalizedString;
  altTitles: LocalizedString[];
  description: LocalizedString;

  originalLanguage: string;

  lastVolume: string;
  lastChapter: string;

  year: number;
  status: PublicationStatus;

  tags: Tag[];
}
