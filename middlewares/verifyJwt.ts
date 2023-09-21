import { NextFunction, Request, Response } from "express";
import { Secret } from "jsonwebtoken";

import jwt from 'jsonwebtoken';

const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({auth: false, message: 'No token provided.'});
    
    try {
        jwt.verify(token, process.env.SECRET as Secret);
    } catch (error) {
        return res.status(500).json({auth: false, message: error});
    }

    return next();
}

export default verifyJwt;