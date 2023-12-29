class ErrorHandlerService extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }

  static validationError(msg = "All fields are required") {
    return new ErrorHandlerService(422, msg);
  }

  static alreadyExist(msg = "Already exists") {
    return new ErrorHandlerService(409, msg);
  }

  static wrongCredentials(msg = "Invalid Credentials ! ") {
    return new ErrorHandlerService(400, msg);
  }

  static unAuthorized(msg = "unAuthorized") {
    return new ErrorHandlerService(401, msg);
  }

  static notFound(msg = "404 Not Found") {
    return new ErrorHandlerService(404, msg);
  }

  static badRequest(msg = "bad request") {
    return new ErrorHandlerService(400, msg);
  }

  static forbidden(msg = "Not allowed") {
    return new ErrorHandlerService(403, msg);
  }
}

export default ErrorHandlerService;
