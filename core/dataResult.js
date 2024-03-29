const Result = require("./result");
const { getStatusText, getStatusCode } = require("./statusCodes");
class DataResult extends Result {
  constructor(success, statusCode, data) {
    super(success);
    this.statusCode = statusCode;
    this.data = data;
  }

  dataResult() {
    const statusMessage = getStatusText(this.statusCode);
    const statusCode = getStatusCode(statusMessage);
    
    return {
      success: this.success,
      statusCode: statusCode,
      message:statusMessage,
      data: this.data,
    };
  }

  getData() {
    return {
      data: this.data,
    };
  }
}

module.exports = DataResult;
