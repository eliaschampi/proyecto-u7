
import express from "express";
import cors from "cors";
import { main } from "./src/app";
import MPrisma from "./src/core/PrismaSingleton";

const app = express();
const port = process.env.PORT || 8000;
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
    console.log(`Yeeee my server running http://127.0.0.1:${port}`);
});

export default app;