import Aluno from "../models/Aluno";

class HomeController {
    async index(req, res) {
        const newAluno = await Aluno.create({
            nome: "Maria",
            sobrenome: "Miranda",
            email: "maria.miranda@example.com",
            idade: 25,
            peso: 80.5,
            altura: 1.75,
        });
        res.json(newAluno);
    }
}

export default new HomeController();
