import express from "express";
import { createNewAccessCode } from "../controllers/user.controller";
import { validateAccessCode } from "../controllers/user.controller";
import {
  CreateAccessCodeBodyValidationMiddleware,
  validateAccessCodeBodyValidationMiddleware,
} from "../middlewares/user";

let userRouter = express.Router();

userRouter.post(
  "/createNewAccessCode",
  CreateAccessCodeBodyValidationMiddleware,
  createNewAccessCode
);
userRouter.post(
  "/validateAccessCode",
  validateAccessCodeBodyValidationMiddleware,
  validateAccessCode
);

export default userRouter;
