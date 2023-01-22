import type { Request, Response } from "express";
import MPrisma from "../core/PrismaSingleton";

//listar todo
export const getSongs = async (_req: Request, res: Response): Promise<void> => {
  try {
    const songs = await MPrisma.instance.song.findMany();

    res.status(200).json({
      ok: false,
      data: songs,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};
// crear cancion
export const createSongs = async (req: Request, res: Response): Promise<void> => {
  try {
    await MPrisma.instance.song.create({
      data: req.body
    });

    res.status(201).json({ ok: true, message: "Cancion creada correctamente" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};