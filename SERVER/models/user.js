const {DataTypes} = require("sequelize");
const db = require("../db");

const User = db.define('user', {
    email: {
        type: DataTypes.STRING(100),
        allowNull:false,
        unique: true,
    },
    password: {
        type:DataTypes.STRING,
        allowNUll: false,
    },
});

module.exports = User;