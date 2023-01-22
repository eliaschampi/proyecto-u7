import { Request, Response } from "express";
import MPrisma from "../core/PrismaSingleton";
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';




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

export const login = async (req: Request, res: Response) => {

    try {

        const { email, password } = req.body;

        const user: any = await MPrisma.instance.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(404).json({ok: false, message: "Usuario no encontrado" });
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(404).json({ok: false, message: "Contraseña incorrecta" });
        }

        const secret = <string>process.env.JWT_SCREET;
/*
        const token = jwt.sign({ id: user.id }, secret, {
            expiresIn: parseInt(<string>process.env.JWTTTL)
        });
*/
        res.status(200).json({ 
            ok: true,
            user,
            
            message: "Bienvenido al sistema"
        });

    } catch (error) {
       res.status(500).json({ ok: false, message: error });
    }
};



