import { Request, Response } from "express";
import { User } from "../models/user/user.model";
import {
  validateAccessCode as validateAccessCodeFromDB,
  saveUserCredentials,
} from "../models/user/user.repository";
import { sendSMS } from "./twilio";

export const createNewAccessCode = async (req: Request, res: Response) => {
  const { phone_number } = req.body;
  // generate access code
  const access_code = Math.floor(100000 + Math.random() * 900000);

  const user = new User(phone_number, access_code);

  try {
    Promise.all([
      saveUserCredentials(user),
      sendSMS(phone_number, `Your access code is ${access_code}`),
    ]);
  } catch (e) {
    res.status(500).send(false);
  }

  res.status(200).send("Access code sent successfully");
};

export const validateAccessCode = async (req: any, res: Response) => {
  const { phone_number, access_code } = req.body;

  const isValid = await validateAccessCodeFromDB(phone_number, access_code);

  if (!isValid) {
    res.status(400).send({ success: false, message: "Invalid access code" });
  }

  res
    .status(200)
    .send({ success: true, message: "Access code validated successfully" });
};
