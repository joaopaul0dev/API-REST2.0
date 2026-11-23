import app from "./app.js";
import env from "dotenv";
env.config();

const port = process.env.APP_PORT;
app.listen(port);
