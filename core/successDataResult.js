
const DataResult = require("./dataResult");

class SuccessDataResult extends DataResult {
  constructor(statusCode, data) {
    super(true, statusCode, data);
  }
}
module.exports = SuccessDataResult;
