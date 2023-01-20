
import { Request, Response } from "express";
import MPrisma from "../core/PrismaSingleton";

export const fetchUsers = async (req: Request, res: Response) => {
    const values = await MPrisma.instance.user.findMany();
    res.status(200).json({ values });
}

