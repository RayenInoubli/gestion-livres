import mongoose from "mongoose";
import Book from "../models/Book.js";
import bookValidator from "../validators/BookValidator.js";

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json({ data: books });
};

export const getBookById = async (req, res) => {
  // #swagger.tags = ['Books']

  const book = await Book.findById(req.params.id)
    .populate("author")
    .populate("categories");
  res.json({ data: book });
};

export const createBook = async (req, res) => {
  // #swagger.tags = ['Books']

  /*  
    #swagger.requestBody = {
      required: true,
      content: {
          "application/json": {
              schema: {
                  $ref: "#/components/schemas/bokkSchema"
              }  
          }
      }
    } 
  */

  const newBook = new Book(req.body);
  const savedBook = await newBook.save();
  return res.json({ data: savedBook });
};

export const createWithValidation = async (req, res) => {
  // #swagger.tags = ['Books']

  const { error, value } = bookValidator.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      errors: error.details.map((err) => err.message),
    });
  }

  const newBook = new Book(req.body);
  const savedBook = await newBook.save();
  return res.json({ data: savedBook });
};

export const updateBookById = async (req, res) => {
  // #swagger.tags = ['Books']

  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({ error: "book not found" });
  }

  if (req.body.author) {
    book.author = req.body.author;
  }

  if (req.body.categories) {
    book.categories = book.categories.concat(req.body.categories);
  }

  await book.save();
  return res.json({ data: book });
};

export const deleteBookById = async (req, res) => {
  // #swagger.tags = ['Books']

  await Book.findByIdAndDelete(req.params.id);
  res.json({ msg: "book deleted" });
};
