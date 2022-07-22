import get, { AxiosError } from "axios";
import { MangaDexError } from "../types/error";
import MangaDexResponse from "../types/response";

const BASE_PATH = "https://api.mangadex.org";

export async function apiRequest<T>(path: string): Promise<MangaDexResponse<T>> {
  try {
    console.log(decodeURIComponent(BASE_PATH + path));
    const request = await get(BASE_PATH + path);

    if (request.status != 200) {
      throw new MangaDexError(request.status);
    }

    return request.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new MangaDexError(e.response?.status || 500);
    }

    throw new MangaDexError(500);
  }
}
