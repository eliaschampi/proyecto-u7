import { Router } from "express";
import { fetchUsers } from "../controller/UserController";

const router = Router();

router.get("/", fetchUsers)

export default router;