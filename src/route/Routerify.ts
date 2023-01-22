import { Router } from "express";
import { login } from "../controller/UserController";
import userRoute from "./user";
import songRouter from "./song";

class Routerify {

    main() {
        const router = Router();

        router.get("/", (req, res) => {
            res.status(200).send("hello world")
        })
        
        // user
        router.use("/users", userRoute);
        router.post("/login", login);

        // song
        // song routes here
        router.use("/songs", songRouter);

        // playlist
        // playlist routes here

        return router;
    }
}

export default Routerify;