"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fail = exports.success = void 0;
const success = (data, message = 'Success', statusCode = 200) => ({
    success: true,
    message,
    data,
    statusCode,
});
exports.success = success;
const fail = (message = 'Error', statusCode = 500, data) => ({
    success: false,
    message,
    data: data || null,
    statusCode,
});
exports.fail = fail;
//# sourceMappingURL=response.js.map