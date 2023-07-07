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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const static_1 = require("../utils/static");
const user_model_1 = require("../model/user.model");
const Response = static_1.ApiResponseFactory.ApiResponse;
class AuthService {
    constructor() {
        // constructor(private resources: Resource ) {}
        this.user = user_model_1.User;
    }
    createService(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = payload;
            // await this.resources.beforeCreate({email})
            const user = yield this.user.create(Object.assign({}, payload));
            const response = Response(true, 201, "Account was created", user);
            return response;
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.user.findAll();
            if (user.length === 0) {
                throw { ok: false, status: 404, message: "No user yet found" };
            }
            return { ok: true, status: 200, message: "Record was retrived", body: { user } };
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map