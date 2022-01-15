const { DataResult } = require("./dataResult");
const { getStatusText, getStatusCode } = require("./statusCodes");


class ErrorResponse extends DataResult {
    constructor(statusCode) {
        super(false)
        this.statusCode = statusCode

    }
    dataResult() {
        const statusMessage = getStatusText(this.statusCode)
        const statusCode = getStatusCode(statusMessage)
        return {
            success: this.success,
            statusCode: statusCode,
            message: statusMessage,
        }
    }

}
module.exports = { ErrorResponse }