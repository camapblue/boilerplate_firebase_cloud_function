/*
* Prefix: 
* Nearby Stores: 100x
* Filter Stores: 200x
* PriceList: 300x
*/

const CustomErrorType = {
    PRICE_LIST: {
        NOT_FOUND: {
            CODE: 3000,
            MESSAGE: "NOT_FOUND"
        }
    }
};

module.exports = { 
    EXCEPTION_NOT_FOUND: 404, 
    BAD_REQUEST: 400, 
    GENERAL_ERROR: 500,
    CustomErrorType
};