export interface LocalizedString {
  en: string;
}

export type PublicationStatus = "completed" | "ongoing" | "cancelled" | "hiatus";

export interface Relationship {
  id: string;
  type: string | "cover_art";
  related?: string;
  attributes?: CoverArtAttributes;
}

export interface CoverArtAttributes {
  fileName: string;
}
