// controllers/articleController.js
const articleService = require('../services/articleService');

// Create a new article
exports.createArticle = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const article = await articleService.createArticle({ title, content, author });
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all articles
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await articleService.getAllArticles();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
