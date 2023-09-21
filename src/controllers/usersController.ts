import { Request, Response, NextFunction } from "express";

class UsersController {
    static getAll = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({users: [{id: 1, name: "test"}, {id: 2, name: "test2"}, {id: 3, name: "test3"}]});
    }
}

export default UsersController;