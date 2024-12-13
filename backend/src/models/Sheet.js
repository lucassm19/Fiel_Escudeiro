const DataTypes = require("sequelize");
const db = require("../db");
const Sheet = db.define('goblin_sheet', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: DataTypes.STRING,
    //characteristic: DataTypes.STRING,
    //occupation: DataTypes.STRING,
    // level: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
});
module.exports = Sheet;