export class MangaDexError extends Error {
  constructor(code: number) {
    super(code.toString());
  }
}
