export class NotFoundException extends Error {
  statusCode?: number;
  constructor(message?: string, statusCode?: number) {
    super(message);
    this.statusCode = statusCode || 404;
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}
