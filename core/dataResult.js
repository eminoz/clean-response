const Result = require("./result");

class DataResult extends Result {
    constructor(success, message, data) {
        super(success, message)
        this.data = data
    }

    dataResult() {
        return {
            success: this.success,
            message: this.message,
            data: this.data
        }
    }

    getData() {
        return {
            data: this.data
        }
    }
}

module.exports = DataResult