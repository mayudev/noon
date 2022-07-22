import { LocalizedString } from "./misc";

export interface Tag {
  id: string;
  type: "tag";
  attributes: TagAttributes;
}

export interface TagAttributes {
  name: LocalizedString;
  group: TagGroup;
  version: number;
}

export type TagGroup = "theme" | "genre";
