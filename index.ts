import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
