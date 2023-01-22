import { Router } from "express";
import { getSongs, createSongs, getSongById } from "../controller/SongController";

const songRouter: Router = Router();

songRouter.get("/", getSongs);
songRouter.post("/", createSongs);
songRouter.get("/:id", getSongById);

export default songRouter;