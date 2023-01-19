
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;
app.use(cors({ origin: "*" }));

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hola mundo!')
});


app.listen(port, () => {
    console.log(`Yeeee my server running http://127.0.0.1:${port}`);
});

export default app;