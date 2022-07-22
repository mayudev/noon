export class Path {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  with(...params: string[]) {
    return this.path + "/" + params[0] + "?" + params[1];
  }
}

export const paths = {
  mangaDetails: new Path("/manga"),
};
