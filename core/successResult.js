const { DataResult } = require("./dataResult");
const { getStatusText, getStatusCode } = require("./statusCodes");


class SuccessResponse extends DataResult {
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
module.exports = { SuccessResponse }
