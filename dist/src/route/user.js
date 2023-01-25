"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const router = (0, express_1.Router)();
router.get("/", UserController_1.fetchUsers);
router.post("/", UserController_1.createUsers);
exports.default = router;
//# sourceMappingURL=user.js.map