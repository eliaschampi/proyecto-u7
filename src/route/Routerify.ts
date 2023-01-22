import { Router } from "express";
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

        // song
        // song routes here
        router.use("/songs", songRouter);

        // playlist
        // playlist routes here

        return router;
    }
}

export default Routerify;