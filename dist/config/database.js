"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize(process.env.DATABASE, process.env.USER, process.env.PASS, {
    host: process.env.HOST,
    port: 6000,
    dialect: 'postgres',
});
//# sourceMappingURL=database.js.map