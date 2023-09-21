import { Router } from "express";
import UsersController from "../controllers/usersController";
import verifyJwt from "../../middlewares/verifyJwt";

const router = Router();

const usersRoutes = router
.get('/users', verifyJwt, UsersController.getAll)

export default usersRoutes;