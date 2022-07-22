import { stringify } from "qs";

export class Path {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  with(param: string, qs: object) {
    const params = stringify(qs);

    return this.path + "/" + param + "?" + params;
  }
}

export class Subpath extends Path {
  subpath: string;

  constructor(path: string, subpath: string) {
    super(path);

    this.subpath = subpath;
  }

  with(param: string, qs: object) {
    const params = stringify(qs);

    return this.path + "/" + param + this.subpath + "?" + params;
  }
}

export const paths = {
  mangaDetails: new Path("/manga"),
  mangaFeed: new Subpath("/manga", "/feed"),
};
