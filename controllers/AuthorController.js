import Author from "../models/Author.js";

export const createAuthor = async (req, res) => {
  const newAuthor = new Author(req.body);
  const savedAuthor = await newAuthor.save();
  return res.json({ data: savedAuthor });
};
