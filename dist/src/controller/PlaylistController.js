"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToPlaylist = exports.createPlaylist = exports.getPlaylistAll = void 0;
const PrismaSingleton_1 = __importDefault(require("../core/PrismaSingleton"));
const getPlaylistAll = async (req, res) => {
    try {
        const values = await PrismaSingleton_1.default.instance.playlist.findMany({
            include: {
                playlists: {
                    include: {
                        song: true,
                    },
                },
            },
        });
        const data = values.map((item) => ({
            id: item.id,
            name: item.name,
            userId: item.userId,
            songs: item.playlists.map((midleTable) => ({
                ...midleTable.song,
            })),
        }));
        res.status(201).json({ ok: true, data });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};
exports.getPlaylistAll = getPlaylistAll;
const createPlaylist = async (req, res) => {
    try {
        await PrismaSingleton_1.default.instance.playlist.create({
            data: req.body,
        });
        res
            .status(201)
            .json({ ok: true, message: "playlist creada correctamente" });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};
exports.createPlaylist = createPlaylist;
const addToPlaylist = async (req, res) => {
    try {
        await PrismaSingleton_1.default.instance.playlistSong.create({
            data: req.body,
        });
        res.status(201).json({ ok: true, message: "Se agregó al plailist" });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};
exports.addToPlaylist = addToPlaylist;
//# sourceMappingURL=PlaylistController.js.map