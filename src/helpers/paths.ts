import { stringify } from "qs";

export class Path {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  with(param: string, qs: object, subpath?: string) {
    const params = stringify(qs);

    return this.path + "/" + param + (subpath ?? "") + "?" + params;
  }
}

export const paths = {
  mangaDetails: new Path("/manga"),
  chapterDetails: new Path("/chapter"),
  chapterImages: new Path("/at-home/server"),
};
