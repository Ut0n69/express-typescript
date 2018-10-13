import * as BodyParser from "body-parser";
import * as Express from "express";
import router from "./routes/v1/";

const LISTEN_PORT = 3000;
const app = Express();

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

app.use("/api/v1/", router);

app.listen(process.env.PORT || LISTEN_PORT, () => {
  console.log(`listening on port ${LISTEN_PORT}`);
});
