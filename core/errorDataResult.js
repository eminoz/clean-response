
const DataResult = require("./dataResult");

class ErrorDataResult extends DataResult {
  constructor(statusCode, data) {
    super(true, statusCode, data);
  }
}
module.exports = ErrorDataResult;
