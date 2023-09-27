"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAccessCode = exports.createNewAccessCode = void 0;
const user_model_1 = require("../models/user/user.model");
const user_repository_1 = require("../models/user/user.repository");
const twilio_1 = require("./twilio");
const createNewAccessCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phone_number } = req.body;
    // generate access code
    const access_code = Math.floor(100000 + Math.random() * 900000);
    const user = new user_model_1.User(phone_number, access_code);
    try {
        Promise.all([
            (0, user_repository_1.saveUserCredentials)(user),
            (0, twilio_1.sendSMS)(phone_number, `Your access code is ${access_code}`),
        ]);
    }
    catch (e) {
        res.status(500).send(false);
    }
    res.status(200).send("Access code sent successfully");
});
exports.createNewAccessCode = createNewAccessCode;
const validateAccessCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phone_number, access_code } = req.body;
    const isValid = yield (0, user_repository_1.validateAccessCode)(phone_number, access_code);
    if (!isValid) {
        res.status(400).send({ success: false, message: "Invalid access code" });
    }
    res
        .status(200)
        .send({ success: true, message: "Access code validated successfully" });
});
exports.validateAccessCode = validateAccessCode;
