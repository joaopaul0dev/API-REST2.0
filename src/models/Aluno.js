import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          allowNull: false,
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo nome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo sobrenome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: {
              msg: "Email inválido",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            isInt: {
              msg: "Idade inválida",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          allowNull: false,
          validate: {
            isFloat: {
              msg: "Peso inválido",
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          allowNull: false,
          validate: {
            isFloat: {
              msg: "Altura inválida",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "alunos",
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "aluno_id" });
  }
}