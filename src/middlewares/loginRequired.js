import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Login required" });
    }

    const [, token] = authorization.split(" ");

    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, email } = dados;

        const user = await User.findOne({
            where: { id, email },
        });

        if(!user) {
            return res.status(401).json({ error: "User not found" });
        }

        req.userId = id;
        req.userEmail = email;

        return next();
    } catch (e){
        return res.status(401).json({ error: "Login not valid" });

    }
};
