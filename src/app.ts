import { Express } from 'express';
import Routerify from './route/Routerify';

export async function main(app: Express) {

    const routefy = new Routerify()

    const routes = routefy.main();

    app.use("/api/v1", routes);

}

