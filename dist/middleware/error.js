"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorMiddleware = void 0;
const CustomErrorMiddleware = (err, req, res, next) => {
    if (err.ok === false) {
        return res.status(err.status).json({ ok: false, status: err.status, message: err.message });
    }
    if (err.status || 500) {
        return res.status(err.status || 500).json({ ok: false, status: err.status || 500, message: err.message });
    }
};
exports.CustomErrorMiddleware = CustomErrorMiddleware;
//# sourceMappingURL=error.js.map