"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SongController_1 = require("../controller/SongController");
const verifyTokenMidleware_1 = __importDefault(require("../midlewares/verifyTokenMidleware"));
const songRouter = (0, express_1.Router)();
songRouter.get("/", SongController_1.getPublicSongs);
songRouter.get("/privates", verifyTokenMidleware_1.default, SongController_1.getPublicSongs);
songRouter.post("/", verifyTokenMidleware_1.default, SongController_1.createSongs);
songRouter.get("/:id", verifyTokenMidleware_1.default, SongController_1.getSongById);
exports.default = songRouter;
//# sourceMappingURL=song.js.map