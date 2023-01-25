"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const MPrisma = {
    instance: new client_1.PrismaClient(),
};
Object.freeze(MPrisma);
exports.default = MPrisma;
//# sourceMappingURL=PrismaSingleton.js.map