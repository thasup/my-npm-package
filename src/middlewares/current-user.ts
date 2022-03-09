import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface shippingAddressAttrs {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface UserPayload {
  id: string;
  email: string;
  isAdmin: boolean;
  name: string;
  image?: string;
  gender: string;
  age: number;
  bio?: string;
  shippingAddress?: shippingAddressAttrs;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;
  } finally {
    next();
  }
};
