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
exports.BaseAuth = void 0;
const static_1 = require("../utils/static");
const Response = static_1.ApiResponseFactory.ApiResponse;
class BaseAuth {
    constructor(user) {
        this.user = user;
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.user.create(Object.assign({}, payload));
            const response = Response(true, 201, "Account was created", user);
            return response;
        });
    }
}
exports.BaseAuth = BaseAuth;
//# sourceMappingURL=auth.base.js.map