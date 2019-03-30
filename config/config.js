require("dotenv").config();

module.export = {
  development: {
    username: "root",
    password: process.env.PASSWORD,
    database: "dates_db",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
