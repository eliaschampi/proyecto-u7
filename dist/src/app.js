"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const express_1 = require("express");
const Routerify_1 = __importDefault(require("./route/Routerify"));
const path_1 = __importDefault(require("path"));
async function main(app) {
    const instance = new Routerify_1.default();
    const routes = instance.main();
    app.use("/api/v1", routes);
    app.use((0, express_1.static)(path_1.default.join(__dirname, "../static")));
    app.get("/*", function (req, res) {
        res.sendFile(path_1.default.join(__dirname, "../static/index.html"));
    });
}
exports.main = main;
//# sourceMappingURL=app.js.map