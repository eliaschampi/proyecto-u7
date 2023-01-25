import { Router } from "express";
import {
  createSongs,
  getPublicSongs,
  getPrivateSongs,
  getSongById,

} from "../controller/SongController";
import verifyTokenMidleware from "../midlewares/verifyTokenMidleware";

const songRouter: Router = Router();

songRouter.get("/", getPublicSongs);
songRouter.get("/privates", verifyTokenMidleware, getPrivateSongs);
songRouter.post("/", verifyTokenMidleware, createSongs);
songRouter.get("/:id", verifyTokenMidleware, getSongById);

export default songRouter;
