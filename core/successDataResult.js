const { getStatusText, getStatusCode } = require("./statusCodes");
const Result = require("./result");


class SuccessDataResult extends Result {
    constructor(statusCode, data) {
        super(true)
        this.statusCode = statusCode
        this.data = data
    }
    dataResult() {
        const statusMessage = getStatusText(this.statusCode)
        const statusCode = getStatusCode(statusMessage)
        return {
            success: this.success,
            statusCode: statusCode,
            message: statusMessage,
            data: this.data
        }
    }

}
module.exports = SuccessDataResult
