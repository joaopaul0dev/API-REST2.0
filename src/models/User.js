import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        len: {
                            args: [3, 255],
                            msg: "Nome deve ter entre 3 e 255 caracteres",
                        },
                    },
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: {
                        msg: "Email existente",
                    },
                    validate: {
                        isEmail: {
                            msg: "Email inválido",
                        },
                    },
                },
                password_hash: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    defaultValue: "",
                },
                password: {
                    type: Sequelize.VIRTUAL,
                    defaultValue: "",
                    validate: {
                        len: {
                            args: [6, 50],
                            msg: "Senha deve ter entre 6 e 50 caracteres",
                        },
                    },
                },
            },
            {
                sequelize,
                modelName: "users",
            },
        );

        this.addHook("beforeSave", async (user) => {
            if (user.password) {
                user.password_hash = await bcryptjs.hash(
                    String(user.password),
                    8,
                );
            }
        });

        return this;
    }

    passwordIsValid(password) {
        return bcryptjs.compare(password, this.password_hash);
    }
}
