export class NotFoundError extends Error {
  readonly name = 'NotFoundError';

  constructor(item: string) {
    super(`Item not ${item} not founded`);
  }
}
