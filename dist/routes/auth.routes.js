"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controller/auth.controller");
const auth_service_1 = require("../service/auth.service");
const authService = new auth_service_1.AuthService();
const auth = new auth_controller_1.AuthController(authService);
exports.authRoutes = (0, express_1.default)();
exports.authRoutes.post('/create', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield auth.createUser(req, res, next);
}));
exports.authRoutes.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield auth.get(req, res, next);
}));
//# sourceMappingURL=auth.routes.js.map