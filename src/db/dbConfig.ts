const dotenv = require('dotenv');
dotenv.config();

export default {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "todo",
  port: 3306
};
