import express from "express";
import { createEvent } from "../controllers/EventController.js";

const router = express.Router();

router.post("/", createEvent);

export default router;