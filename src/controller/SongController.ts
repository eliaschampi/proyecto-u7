import type { Request, Response } from "express";
import MPrisma from "../core/PrismaSingleton";

//listar todo

export const getPublicSongs = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const songs = await MPrisma.instance.song.findMany({
      where: {
        state: true,
      },
    });

    res.status(200).json({
      ok: true,
      data: songs,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

export const getPrivateSongs = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const songs = await MPrisma.instance.song.findMany({
      where: {
        state: false,
      },
    });

    res.status(200).json({
      ok: true,
      data: songs,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};
// crear cancion
export const createSongs = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await MPrisma.instance.song.create({
      data: req.body,
    });

    res.status(201).json({ ok: true, message: "Cancion creada correctamente" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};
//listar por id
export const getSongById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const song = await MPrisma.instance.song.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });

    if (!song) {
      return res.status(404).json({
        ok: false,
        message: "Canción no encontrada",
      });
    }

    res.status(200).json({
      ok: true,
      data: song,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
  }
};
