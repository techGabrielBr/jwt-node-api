import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";

class AuthController {
    static auth = (req: Request, res: Response, next: NextFunction) => {
        if(req.body.user === 'test' && req.body.password === '123'){
            const id = 1;
            const token = jwt.sign({ id: id, user: req.body.user }, process.env.SECRET as Secret, {
                expiresIn: 30 // expire time
            });
            return res.json({auth: true, token: token});
        }
        
        res.status(500).json({message: 'Invalid data'});
    }
}

export default AuthController;