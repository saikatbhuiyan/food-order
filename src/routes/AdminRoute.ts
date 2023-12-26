import express, { Request, Response, NextFunction } from "express";
import { CreateVandor, GetVandorByID, GetVandors } from "../controllers";

const router = express.Router();

router.post("/vendor", CreateVandor);
router.get("/vendor/:id", GetVandorByID);
router.get("/vendor", GetVandors);

export { router as AdminRoute };
