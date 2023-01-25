"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PlaylistController_1 = require("../controller/PlaylistController");
const playlistRoute = (0, express_1.Router)();
playlistRoute.get("/", PlaylistController_1.getPlaylistAll);
playlistRoute.post("/", PlaylistController_1.createPlaylist);
playlistRoute.post("/add", PlaylistController_1.addToPlaylist);
exports.default = playlistRoute;
//# sourceMappingURL=playlist.js.map