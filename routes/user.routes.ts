import express from "express";
import { createNewAccessCode } from "../controllers/user.controller";
import { validateAccessCode } from "../controllers/user.controller";

let userRouter = express.Router();

userRouter.post("/createNewAccessCode", createNewAccessCode);
userRouter.post("/validateAccessCode", validateAccessCode);

export default userRouter;
