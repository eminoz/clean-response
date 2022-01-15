class Result {

    constructor(success, message) {
        this.success = success
        this.message = message
    }
    isstatus() {
        return {
            status: this.status
        }
    }
    getMessage() {
        return {
            message: this.message
        }
    }
}

module.exports = { Result }