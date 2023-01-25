"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const user_1 = __importDefault(require("./user"));
const song_1 = __importDefault(require("./song"));
const verifyTokenMidleware_1 = __importDefault(require("../midlewares/verifyTokenMidleware"));
const playlist_1 = __importDefault(require("./playlist"));
class Routerify {
    main() {
        const router = (0, express_1.Router)();
        router.get("/", (req, res) => {
            res.status(200).send("hello world");
        });
        // user
        router.post("/users/login", UserController_1.login);
        router.use("/users", verifyTokenMidleware_1.default, user_1.default);
        // song
        // song routes here
        router.use("/songs", song_1.default);
        // playlist
        // playlist routes here
        router.use("/playlist", playlist_1.default);
        return router;
    }
}
exports.default = Routerify;
//# sourceMappingURL=Routerify.js.map