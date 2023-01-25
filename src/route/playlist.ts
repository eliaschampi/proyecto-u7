import { Router } from "express";
import {
  getPlaylistAll,
  createPlaylist,
  addToPlaylist,
} from "../controller/PlaylistController";
import verifyTokenMidleware from "../midlewares/verifyTokenMidleware";

const playlistRoute: Router = Router();

playlistRoute.get("/", getPlaylistAll);
playlistRoute.post("/", verifyTokenMidleware, createPlaylist);
playlistRoute.post("/add", verifyTokenMidleware, addToPlaylist);

export default playlistRoute;
