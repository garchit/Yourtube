class ApiError extends Error {
  constructor(statusCode, message="some thing went wrong", error=[] , stack="") {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.statck = stack;
    this.data = null;
    this.success = false;
  }
}

export default ApiError;