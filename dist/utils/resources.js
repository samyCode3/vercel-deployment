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
exports.Resource = void 0;
const user_model_1 = require("../model/user.model");
class Resource {
    constructor() {
        this.user = user_model_1.User;
    }
    beforeCreate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.user.findOne({ where: { email: payload } });
            if (user) {
                throw { success: false, status: 400, message: "Dupliacate email not allowed" };
            }
        });
    }
}
exports.Resource = Resource;
//# sourceMappingURL=resources.js.map