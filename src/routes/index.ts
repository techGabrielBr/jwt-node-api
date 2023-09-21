import { Application } from "express";
import authRoutes from "./authRoutes";
import usersRoutes from "./userRoutes";

const routes = (app: Application) => {
    app.use(
        authRoutes,
        usersRoutes
    )
}

export default routes;