"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (req, res, next) => {
    const token = req.headers["authorization"];
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!token) {
        return res.status(403).send({
            ok: false,
            message: "Se requiere un token de seguridad",
        });
    }
    jsonwebtoken_1.default.verify(token, JWT_SECRET, (err) => {
        if (err) {
            return res.status(401).send({
                ok: false,
                message: "Tu sesión ha expirado",
            });
        }
        next();
    });
};
//# sourceMappingURL=verifyTokenMidleware.js.map