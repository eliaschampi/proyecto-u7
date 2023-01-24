import { Request, Response } from "express";
import MPrisma from "../core/PrismaSingleton";

export const getPlaylistAll = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const values = await MPrisma.instance.playlist.findMany({
      include: {
        playlists: {
          include: {
            song: true,
          },
        },
      },
    });

    const data = values.map((item) => ({
      id: item.id,
      name: item.name,
      userId: item.userId,
      songs: item.playlists.map((midleTable) => ({
        ...midleTable.song,
      })),
    }));

    res.status(201).json({ ok: true, data });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

export const createPlaylist = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await MPrisma.instance.playlist.create({
      data: req.body,
    });

    res
      .status(201)
      .json({ ok: true, message: "playlist creada correctamente" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

export const addToPlaylist = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await MPrisma.instance.playlistSong.create({
      data: req.body,
    });

    res.status(201).json({ ok: true, message: "Se agregó al plailist" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};
