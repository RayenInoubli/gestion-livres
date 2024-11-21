import express from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
  createWithValidation,
} from "../controllers/BookController.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", createBook);
router.post("/with-validation", createWithValidation);
router.patch("/:id", updateBookById);
router.delete("/:id", deleteBookById);

export default router;