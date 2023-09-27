"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const user_controller_2 = require("../controllers/user.controller");
const user_1 = require("../middlewares/user");
let userRouter = express_1.default.Router();
userRouter.post("/createNewAccessCode", user_1.CreateAccessCodeBodyValidationMiddleware, user_controller_1.createNewAccessCode);
userRouter.post("/validateAccessCode", user_1.validateAccessCodeBodyValidationMiddleware, user_controller_2.validateAccessCode);
exports.default = userRouter;
