import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  const JWT_SECRET = <jwt.Secret>process.env.JWT_SECRET;

  if (!token) {
    return res.status(403).send({
      ok: false,
      message: "Se requiere un token de seguridad",
    });
  }

  jwt.verify(token, JWT_SECRET, (err) => {
    if (err) {
      return res.status(401).send({
        ok: false,
        message: "Tu sesión ha expirado",
      });
    }
    next();
  });
};
