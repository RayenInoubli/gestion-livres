import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json({data: books});
};

export const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json({data: book});
};

export const createBook = async (req, res) => {
  const newBook = new Book(req.body);
  const savedBook = await newBook.save();
  res.json({data: savedBook});
};

export const updateBookById = async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({data: updatedBook});
};

export const deleteBookById = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ msg: "book deleted" });
};
