import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/NotAuthorizedError";

export const adminUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.currentUser && req.currentUser.isAdmin) {
    next();
  } else {
    throw new NotAuthorizedError();
  }
};
