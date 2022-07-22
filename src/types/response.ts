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
};

export default MangaDexResponse;
