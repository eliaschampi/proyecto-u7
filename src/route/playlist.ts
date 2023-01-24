import { Router } from "express";
import {
  getPlaylistAll,
  createPlaylist,
  addToPlaylist,
} from "../controller/PlaylistController";

const playlistRoute: Router = Router();

playlistRoute.get("/", getPlaylistAll);
playlistRoute.post("/", createPlaylist);
playlistRoute.post("/add", addToPlaylist);

export default playlistRoute;
