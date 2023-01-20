import { Router } from "express";
import userRoute from "./user";

class Routerify {

    main() {
        const router = Router();

        router.get("/", (req, res) => {
            res.status(200).send("hello world")
        })
        
        // user
        router.use("/user", userRoute);

        // song
        // song routes here


        // playlist
        // playlist routes here

        return router;
    }
}

export default Routerify;