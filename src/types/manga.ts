import {
  ContentRating,
  Entity,
  LocalizedString,
  PublicationDemographic,
  PublicationStatus,
  Relationship,
  State,
} from "./misc";
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

  isLocked: boolean;
  // links

  originalLanguage: string;

  lastVolume: string;
  lastChapter: string;

  publicationDemographic: PublicationDemographic;
  status: PublicationStatus;
  year: number | null;
  contentRating: ContentRating;

  chapterNumbersResetOnNewVolume: boolean;
  availableTranslatedLanguages: string[];

  tags: Tag[];
  state: State;

  version: number;
}
