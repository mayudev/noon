import { Images } from "./images";

type MangaDexResult = "ok" | "error";

type MangaDexRequestError = {
  id: string;
  status: number;
  title: string;
  detail: string;
};

type MangaDexResponse<T> = {
  result: MangaDexResult;
  response?: string;
  data?: T;
  errors?: MangaDexRequestError;

  // Pagination
  limit?: number;
  offset?: number;
  total?: number;
};

export type MangaDexImagesResponse = {
  result: MangaDexResult;
  baseUrl: string;
  chapter: Images;
};

export default MangaDexResponse;
