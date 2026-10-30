import { Sequelize } from "sequelize";
import database from "../config/database";
import Aluno from "./Aluno";

const models = [Aluno];

const connection = new Sequelize(database);
models.forEach((model) => model.init(connection));
