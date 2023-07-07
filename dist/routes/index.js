"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("./auth.routes");
const error_1 = require("../middleware/error");
exports.IndexRoutes = (0, express_1.default)();
exports.IndexRoutes.use('/auth', auth_routes_1.authRoutes);
exports.IndexRoutes.use(error_1.CustomErrorMiddleware);
//# sourceMappingURL=index.js.map