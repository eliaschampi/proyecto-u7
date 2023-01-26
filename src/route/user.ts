import { Router } from "express";
import { fetchUsers, createUsers } from "../controller/UserController";


const router = Router();

router.get("/", fetchUsers);
router.post("/", createUsers);

export default router;
