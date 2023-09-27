import { Request, Response, NextFunction } from "express";

export const CreateAccessCodeBodyValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.body.phone_number) {
    res.status(400).send("Please provide a phone number");
  } else if (typeof req.body.phone_number !== "number") {
    res.status(400).send("Please provide a valid phone number");
  }
  next();
};

export const validateAccessCodeBodyValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.body.phone_number || !req.body.access_code) {
    res.status(400).send("Please provide a phone number and access code");
  } else if (typeof req.body.phone_number !== "number") {
    res.status(400).send("Please provide a valid phone number");
  } else if (typeof req.body.access_code !== "number") {
    res.status(400).send("Please provide a valid access code");
  }
  next();
};
