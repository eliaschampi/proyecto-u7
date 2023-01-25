"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.createUsers = exports.fetchUsers = void 0;
const PrismaSingleton_1 = __importDefault(require("../core/PrismaSingleton"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fetchUsers = async (req, res) => {
    try {
        const values = await PrismaSingleton_1.default.instance.user.findMany();
        res.status(200).json({ ok: true, data: values });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error, data: null });
    }
};
exports.fetchUsers = fetchUsers;
const createUsers = async (req, res) => {
    try {
        let { password, date_born } = req.body;
        const data = req.body;
        data.password = bcrypt_1.default.hashSync(password, 10);
        data.date_born = new Date(date_born);
        await PrismaSingleton_1.default.instance.user.create({
            data,
        });
        res.status(201).json({ ok: true, message: "Usuario creado correctamente" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ ok: false, message: error });
    }
};
exports.createUsers = createUsers;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await PrismaSingleton_1.default.instance.user.findUnique({
            where: { email },
        });
        if (!user) {
            return res
                .status(404)
                .json({ ok: false, message: "Usuario no encontrado" });
        }
        console.log(password, user.password);
        const passwordIsValid = bcrypt_1.default.compareSync(password, user.password);
        if (!passwordIsValid) {
            return res
                .status(401)
                .json({ ok: false, message: "Contraseña incorrecta" });
        }
        const secret = process.env.JWT_SECRET;
        const token = jsonwebtoken_1.default.sign({ id: user.id }, secret, {
            expiresIn: process.env.JWTTTL,
        });
        res.status(200).json({
            ok: true,
            user,
            token,
            message: "Bienvenido al sistema",
        });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
        console.log(error);
    }
};
exports.login = login;
//# sourceMappingURL=UserController.js.map