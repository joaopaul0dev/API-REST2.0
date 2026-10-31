import User from "../models/User";

class UserController {
    async store(req, res) {
        try {
            const newUser = await User.create({
                nome: "Maria",
                email: "maria.miranda@example.com",
                password: "123456",
            });
            res.json(newUser);
        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((err) => err.message),    
            })
        }
    }
}

export default new UserController();
