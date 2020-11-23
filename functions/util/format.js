const successResponse = function buildSuccessResponse(response, responseData) {
    return response.status(200).json({ "data": responseData });
}
const errorResponse = function buildErrorResponse(response, statusCode, errorCode, message) {
    return response.status(statusCode).json(
        {
            "error": {
                "code": errorCode,
                "message": message
            }
        });
}

module.exports = {
    successResponse, 
    errorResponse
};