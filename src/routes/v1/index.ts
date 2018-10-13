import * as Express from "express";
import list from "./modules/list";
const router = Express.Router();

router.use("/list", list);

export default router;
