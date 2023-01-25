import { Router } from "express";
import { fetchUsers, createUsers } from "../controller/UserController";
import verifyTokenMidleware from "../midlewares/verifyTokenMidleware";

const router = Router();

router.get("/", verifyTokenMidleware, fetchUsers);
router.post("/", createUsers);

export default router;
