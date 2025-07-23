export class NotFoundEXception extends Error {
  statusCode?: number;

  constructor(message?: string, statusCode?: number) {
    super(message || "Not Found ");
    this.statusCode = statusCode || 404;
    Object.setPrototypeOf(this, NotFoundEXception.prototype);
  }
}
