"use strict";

import { Request, Response } from "express";

export const createNewAccessCode = async (req: Request, res: Response) => {
  res.send("createNewAccessCode");
};

export const validateAccessCode = async (req: Request, res: Response) => {
  res.send("validateAccessCode");
};
