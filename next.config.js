require('dotenv').config();

module.exports = {
  env: {
    DB_HOST_DEV: process.env.DB_HOST_DEV,
    DB_NAME_DEV: process.env.DB_NAME_DEV,
    DB_USER_DEV: process.env.DB_USER_DEV,
    DB_PASSWORD_DEV: process.env.DB_PASSWORD_DEV,
    PORT_MYSQL_DEV: process.env.PORT_MYSQL_DEV,
  }
};