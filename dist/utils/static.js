"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseFactory = void 0;
class ApiResponseFactory {
    static ApiResponse(success, status, message, body) {
        return {
            success,
            status,
            message,
            body
        };
    }
}
exports.ApiResponseFactory = ApiResponseFactory;
//# sourceMappingURL=static.js.map