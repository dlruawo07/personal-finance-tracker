"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataResponse = exports.MessageResponse = exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 10000] = "SUCCESS";
    StatusCode[StatusCode["FAILURE"] = 10001] = "FAILURE";
    StatusCode[StatusCode["RETRY"] = 10002] = "RETRY";
    StatusCode[StatusCode["INVALID_ACCESS_TOKEN"] = 10003] = "INVALID_ACCESS_TOKEN";
})(StatusCode || (exports.StatusCode = StatusCode = {}));
class MessageResponse {
    constructor(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.MessageResponse = MessageResponse;
class DataResponse extends MessageResponse {
    constructor(statusCode, message, data) {
        super(statusCode, message);
        this.data = data;
    }
}
exports.DataResponse = DataResponse;
//# sourceMappingURL=response.js.map