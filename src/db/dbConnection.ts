import { Connection } from "mysql";
import dbConfig from "./dbConfig";

const { createConnection } = require("mysql");

const dbConnection: Connection = createConnection(dbConfig);

export default dbConnection;
