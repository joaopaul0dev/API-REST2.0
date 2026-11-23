/* global process */
import User from "../models/User";
import jwt from "jsonwebtoken";

class TokenController {
    async store(req, res) {
        try {
            const { email = "", password = "" } = req.body;

            if (!email || !password) {
                return res
                    .status(401)
                    .json({ error: "Email e password sao requeridos" });
            }

            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(401).json({ error: "User nao encontrado" });
            }

            if (!(await user.passwordIsValid(password))) {
                return res.status(401).json({ error: "Senha invalida" });
            }

            const { id } = user;
            const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
                expiresIn: process.env.TOKEN_EXPIRATION,
            });

            return res.json({ token });
        } catch (error) {
            console.error("Erro ao gerar token:", error);
            return res.status(500).json({
                errors: ["Erro interno no servidor"],
            });
        }
    }
}

export default new TokenController();
