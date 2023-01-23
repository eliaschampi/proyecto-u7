import express from "express";
import cors from "cors";
import { main } from "./src/app";
import MPrisma from "./src/core/PrismaSingleton";
import { config } from "dotenv";

config();


const app = express();
const port = process.env.PORT;
app.use(cors({ origin: "*" }));

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

main(app)
    .catch((e) => console.error(e))
    .finally(async () => await MPrisma.instance.$disconnect())

app.listen(port, () => {
    console.log(`Server running http://127.0.0.1:${port}`);
});

export default app;