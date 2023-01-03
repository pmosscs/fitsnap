//these are your data models and tables. the variable/function that creates them.
const { DataTypes } = require("sequelize");
const { db } = require("./database");

module.exports = {
  User: db.define("user", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_URL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }),

  Monthly_Stat: db.define("monthly_stat", {
    month_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    month: DataTypes.STRING,
    mile_min: DataTypes.INTEGER,
    mile_sec: DataTypes.INTEGER,
    push_ups: DataTypes.INTEGER,
    pull_ups: DataTypes.INTEGER,
  }),
};

//sequelize orm
