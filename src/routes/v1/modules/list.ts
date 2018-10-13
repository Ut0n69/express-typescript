import * as Express from "express";
import { MysqlError } from "mysql";
import dbConnection from "../../../db/dbConnection";

const router = Express.Router();

let query: string = "";

// GET
router.get("/", (req: Express.Request, res: Express.Response) => {
  query = `SELECT * FROM list`;
  dbConnection.query(query, (err: MysqlError, rows: any) => {
    if (err) {
      res.json({ RSuccess: false });
      console.log("Error", err);
      return;
    }
    res.json({
      RSuccess: true,
      RData: rows
    });
  });
});
// POST
router.post("/", (req: Express.Request, res: Express.Response) => {
  query = `INSERT INTO list(item) value("${req.body.item}");`;
  dbConnection.query(query, err => {
    if (err) {
      res.json({ RSuccess: false });
      console.log("Error", err);
      return;
    }
    res.json({
      RSuccess: true
    });
  });
});

// PUT
router.put("/", (req, res) => {
  query = `UPDATE list SET item = "${req.body.item}" WHERE id = ${
    req.body.id
  };`;
  dbConnection.query(query, err => {
    if (err) {
      res.json({ RSuccess: false });
      console.log("Error", err);
      return;
    }
    res.json({
      RSuccess: true
    });
  });
});

// DELETE
router.delete("/", (req, res) => {
  query = `DELETE FROM list WHERE id = ${req.body.id};`;
  dbConnection.query(query, err => {
    if (err) {
      res.json({ RSuccess: false });
      console.log("Error", err);
      return;
    }
    res.json({
      RSuccess: true
    });
  });
});

export default router;
