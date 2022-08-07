const Result = require("./result");
const { getStatusText, getStatusCode } = require("./statusCodes");


class SuccessResult extends Result {
  constructor(statusCode) {
    super(true);
    this.statusCode = statusCode;
  }
  dataResult() {
    const statusMessage = getStatusText(this.statusCode);
    const statusCode = getStatusCode(statusMessage);
    return {
      success: this.success,
      statusCode: statusCode,
      message: statusMessage,
    };
  }
}
module.exports = SuccessResult;
