import mongoose from "mongoose";
import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json({ data: books });
};

export const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id)
    .populate("author")
    .populate("category");
  res.json({ data: book });
};

export const createBook = async (req, res) => {
  const newBook = new Book(req.body);
  const savedBook = await newBook.save();
  return res.json({ data: savedBook });
};

export const updateBookById = async (req, res) => {

  const book = await Book.findById(req.params.id);

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
  await Book.findByIdAndDelete(req.params.id);
  res.json({ msg: "book deleted" });
};
