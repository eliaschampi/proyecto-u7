import { Express, static as SendStatic } from "express";
import Routerify from "./route/Routerify";
import path from "path";

export async function main(app: Express) {
  const instance = new Routerify();

  const routes = instance.main();

  app.use("/api/v1", routes);

  app.use(SendStatic(path.join(__dirname, "../static")));

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../static/index.html"));
  });
}
