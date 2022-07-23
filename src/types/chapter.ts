import { Entity, Relationship } from "./misc";

export interface Chapter {
  id: string;
  type: "chapter";
  attributes: ChapterAttributes;
  relationships: Relationship[];
}

export interface ChapterAttributes extends Entity {
  title: string;
  volume: string;
  chapter: string;
  pages: number;
  translatedLanguage: string;
  uploader?: string;
  externalUrl: string | null;

  publishAt: string;
  readableAt: string;
}
