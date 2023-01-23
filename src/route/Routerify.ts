import { Router } from "express";
import { login } from "../controller/UserController";
import userRoute from "./user";
import songRouter from "./song";
import verifyTokenMidleware from "../midlewares/verifyTokenMidleware";

class Routerify {

    main() {
        const router = Router();

        router.get("/", (req, res) => {
            res.status(200).send("hello world")
        })
        
        // user
        router.post("/users/login", login);
        router.use("/users", verifyTokenMidleware, userRoute);

        // song
        // song routes here
        router.use("/songs", verifyTokenMidleware, songRouter);

        // playlist
        // playlist routes here

        return router;
    }
}

export default Routerify;