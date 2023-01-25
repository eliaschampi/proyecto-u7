"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSongById = exports.createSongs = exports.getPrivateSongs = exports.getPublicSongs = void 0;
const PrismaSingleton_1 = __importDefault(require("../core/PrismaSingleton"));
//listar todo
const getPublicSongs = async (_req, res) => {
    try {
        const songs = await PrismaSingleton_1.default.instance.song.findMany({
            where: {
                state: true,
            },
        });
        res.status(200).json({
            ok: true,
            data: songs,
        });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};
exports.getPublicSongs = getPublicSongs;
const getPrivateSongs = async (_req, res) => {
    try {
        const songs = await PrismaSingleton_1.default.instance.song.findMany({
            where: {
                state: false,
            },
        });
        res.status(200).json({
            ok: true,
            data: songs,
        });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};
exports.getPrivateSongs = getPrivateSongs;
// crear cancion
const createSongs = async (req, res) => {
    try {
        await PrismaSingleton_1.default.instance.song.create({
            data: req.body,
        });
        res.status(201).json({ ok: true, message: "Cancion creada correctamente" });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};
exports.createSongs = createSongs;
//listar por id
const getSongById = async (req, res) => {
    try {
        const song = await PrismaSingleton_1.default.instance.song.findUnique({
            where: {
                id: parseInt(req.params.id),
            },
        });
        if (!song) {
            return res.status(404).json({
                ok: false,
                message: "Canción no encontrada",
            });
        }
        res.status(200).json({
            ok: true,
            data: song,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: error,
        });
    }
};
exports.getSongById = getSongById;
//# sourceMappingURL=SongController.js.map