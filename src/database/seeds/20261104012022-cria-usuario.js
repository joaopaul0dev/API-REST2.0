"use strict";
const bcrypt = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
        "users",
        [
            {
            nome: "Luis",
            email: "luis@example.com",
            password_hash: await bcrypt.hash("password123", 8),
            created_at: new Date(),
            updated_at: new Date(),
            },
            {
            nome: "Luis2",
            email: "luis2@example.com",
            password_hash: await bcrypt.hash("password1232", 8),
            created_at: new Date(),
            updated_at: new Date(),
            },
            {
            nome: "Luis3",
            email: "luis3@example.com",
            password_hash: await bcrypt.hash("password1233", 8),
            created_at: new Date(),
            updated_at: new Date(),
            },
        ],
        {},
        );
    },

    async down() {},
};
