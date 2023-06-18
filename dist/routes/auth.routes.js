"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
exports.authRoutes = (0, express_1.default)();
exports.authRoutes.get('/healthCheck', (req, res) => {
    return res.send("working");
});
//# sourceMappingURL=auth.routes.js.map