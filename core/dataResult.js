const { Result } = require("./result");

class DataResult extends Result {
    constructor(success, message) {
        super(success, message)
    }

    dataResult() {
        return {
            success: this.success,
            message: this.message
        }
    }
}

module.exports = { DataResult }