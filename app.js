import dotenv from "dotenv";
import { resolve } from "path";
dotenv.config();
import "./src/database/index.js";
import express from "express";

import HomeRoute from "./src/routes/homeRoutes.js";
import UserRoute from "./src/routes/UserRoutes.js";
import TokenRoute from "./src/routes/tokenRoutes.js";
import AlunoRoute from "./src/routes/alunoRoutes.js";
import fotoRoute from "./src/routes/fotoRoutes.js";

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(express.static(resolve("uploads")));
    }

    routes() {
        this.app.use("/", HomeRoute);
        this.app.use("/users/", UserRoute);
        this.app.use("/tokens/", TokenRoute);
        this.app.use("/alunos/", AlunoRoute);
        this.app.use("/fotos/", fotoRoute);
    }
}

export default new App().app;
