import { Router } from "express";
import {
  createSongs,
  getPublicSongs,
  getSongById,
} from "../controller/SongController";
import verifyTokenMidleware from "../midlewares/verifyTokenMidleware";

const songRouter: Router = Router();

songRouter.get("/", getPublicSongs);
songRouter.get("/privates", verifyTokenMidleware, getPublicSongs);
songRouter.post("/", verifyTokenMidleware, createSongs);
songRouter.get("/:id", verifyTokenMidleware, getSongById);

export default songRouter;
