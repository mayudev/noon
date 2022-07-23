import { MangaAttributes } from "./manga";

export interface LocalizedString {
  en: string;
}

export type PublicationStatus = "completed" | "ongoing" | "cancelled" | "hiatus";

export type PublicationDemographic = "shounen" | "shoujo" | "josei" | "seinen";

export type ContentRating = "safe" | "suggestive" | "erotica" | "pornographic";

export type State = "draft" | "submitted" | "published" | "rejected";

export interface Relationship {
  id: string;
  type: string | "cover_art";
  related?: string;
  attributes?: CoverArtAttributes | MangaAttributes;
}

export interface CoverArtAttributes {
  fileName: string;
}

export interface Entity {
  createdAt: string;
  updatedAt: string;
}
