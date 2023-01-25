import { Router } from "express";
import { login } from "../controller/UserController";
import userRoute from "./user";
import songRouter from "./song";
import verifyTokenMidleware from "../midlewares/verifyTokenMidleware";
import playlistRoute from "./playlist";

class Routerify {
  main() {
    const router = Router();

    router.get("/", (req, res) => {
      res.status(200).send("hello world");
    });

    // user
    router.post("/users/login", login);
    router.use("/users", verifyTokenMidleware, userRoute);

    // song
    // song routes here
    router.use("/songs", songRouter);

    // playlist
    // playlist routes here
    router.use("/playlist", playlistRoute);

    return router;
  }
}

export default Routerify;
