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
exports.Connections = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("../config/config");
const routes_1 = require("../routes");
const configs = new config_1.Config;
const PORT = configs.PORT;
class Connections {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json({ limit: "50mb" }));
        this.app.use((0, cors_1.default)());
        this.loadConnection();
    }
    loadConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.get('/', (req, res) => {
                return res.send('Happy coding');
            });
            this.app.use('/api/v1', routes_1.IndexRoutes);
            this.app.use('*', (req, res) => {
                return res.json({
                    ok: false,
                    status: 404,
                    url: req.url,
                    Ip: req.ip,
                    message: "Route not found"
                });
            });
            this.app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
            });
        });
    }
}
exports.Connections = Connections;
