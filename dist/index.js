"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app_1 = require("./src/app");
const PrismaSingleton_1 = __importDefault(require("./src/core/PrismaSingleton"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use(express_1.default.json());
(0, app_1.main)(app)
    .catch((e) => console.error(e))
    .finally(async () => await PrismaSingleton_1.default.instance.$disconnect());
app.listen(port, () => {
    console.log(`Server running http://127.0.0.1:${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map