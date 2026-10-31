import User from "../models/User";

class UserController {
    async store(req, res) {
        try {
            const newUser = await User.create(req.body);
            return res.json(newUser);
        } catch (error) {
            if (error && Array.isArray(error.errors)) {
                return res.status(400).json({
                    errors: error.errors.map((err) => err.message),
                });
            }

            console.error("Erro ao criar usuario:", error);
            return res.status(500).json({
                errors: ["Erro interno no servidor"],
            });
        }
    }

    async index(req, res) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch {
            return res.json(null);
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            return res.json(user);
        } catch {
            return res.json("User not found");
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({
                    errors: ["Missing ID parameter"],
                });
            }

            const user = await User.findByPk(id);

            if (!user) {
                return res.status(404).json({
                    errors: ["User not found"],
                });
            }

            const updatedUser = await user.update(req.body);

            return res.json(updatedUser);
        } catch (e) {
            if (e && Array.isArray(e.errors)) {
                return res.status(400).json({
                    errors: e.errors.map((err) => err.message),
                });
            }

            return res.status(500).json({
                errors: ["Erro interno no servidor"],
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({
                    errors: ["Missing ID parameter"],
                });
            }

            const user = await User.findByPk(id);

            if (!user) {
                return res.status(404).json({
                    errors: ["User not found"],
                });
            }

            await user.destroy();

            return res.json(user);
        } catch (error) {
            if (error && Array.isArray(error.errors)) {
                return res.status(400).json({
                    errors: error.errors.map((err) => err.message),
                });
            }

            return res.status(500).json({
                errors: ["Erro interno no servidor"],
            });
        }
    }
}

export default new UserController();
