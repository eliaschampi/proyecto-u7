import { Router } from "express";
import { getSongs, createSongs } from "../controller/SongController";

const songRouter: Router = Router();

songRouter.get("/", getSongs);
songRouter.post("/", createSongs);

export default songRouter;