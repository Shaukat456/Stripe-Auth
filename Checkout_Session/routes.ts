import express from "express";
import { createCheckoutSession } from "./controller";

const router = express.Router();

router.post("/create-checkout-session", createCheckoutSession);

export default router;
