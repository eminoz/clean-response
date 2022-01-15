const { ErrorResponse } = require("./core/errorResult")
const { SuccessResponse } = require("./core/successResult")

const getMessage = () => {
    var data = {
        name: "emin",
        otherName: "burak"
    }
    const trueData = new SuccessResponse(201, data).dataResult()
    const errREsponse = new ErrorResponse(501).dataResult()

    console.log(errREsponse)
    // console.log(errorData)

}
getMessage()