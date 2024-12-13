export declare enum StatusCode {
    SUCCESS = 10000,
    FAILURE = 10001,
    RETRY = 10002,
    INVALID_ACCESS_TOKEN = 10003
}
export declare class MessageResponse {
    readonly statusCode: StatusCode;
    readonly message: string;
    constructor(statusCode: StatusCode, message: string);
}
export declare class DataResponse<T> extends MessageResponse {
    readonly data: T;
    constructor(statusCode: StatusCode, message: string, data: T);
}
