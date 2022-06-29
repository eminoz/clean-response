class Result {

    constructor(success, message) {
        this.success = success
        this.message = message
    }

    getSuccessAndMessage() {
        return {
            success: this.success,
            message: this.message
        }
    }

    getSuccess() {
        return {
            success: this.success

        }
    }


}

module.exports = Result