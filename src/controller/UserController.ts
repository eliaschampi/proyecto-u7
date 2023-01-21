import { Request, Response } from "express";
import MPrisma from "../core/PrismaSingleton";
import bcrypt from 'bcrypt';

export const fetchUsers = async (req: Request, res: Response) => {
    try{
        const values = await MPrisma.instance.user.findMany();
        res.status(200).json({ ok:true, data:values });
    }    
    catch (error) {
            res.status(500).json({ ok: false, message: error , data:null});
    }     
};

export const createUsers = async (req: Request, res: Response) => {
    try{
        const {name, email, password, date_born} = req.body;
        await MPrisma.instance.user.create({ data :{
            name: name,
            email: email,
            password: bcrypt.hashSync(password, 10),
            date_born: new Date(date_born),
        }
        
        }); 
        res.status(201).json({ ok:true, message:"Usuario creado correctamente" });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, message: error });
    }    
};



