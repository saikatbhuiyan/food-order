import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json("From Vendor");
});

export { router as VendorRoute };
