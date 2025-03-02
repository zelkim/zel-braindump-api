import Category from "../models/Category.js";

export const GetCategories = async (req, res) => {
  try {
    const article = await Category.find();
    return res.status(200).json(article);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching categories." });
  }
};
