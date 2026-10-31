import dotenv from "dotenv";
dotenv.config();
import "./src/database/index.js";
import express from "express";
import HomeRoute from "./src/routes/homeRoutes.js";
import UserRoute from "./src/routes/UserRoutes.js";

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use("/", HomeRoute);
        this.app.use("/users/", UserRoute);
    }
}

export default new App().app;
