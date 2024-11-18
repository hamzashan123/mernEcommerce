// services/articleService.js
const Article = require('../models/Article');
const User = require('../models/User');

// Create a new article
exports.createArticle = async ({ title, content, author }) => {
  const user = await User.findById(author);
  if (!user) {
    throw new Error('Author not found');
  }
  const newArticle = new Article({ title, content, author });
  await newArticle.save();
  return newArticle;
};

// Get all articles
exports.getAllArticles = async () => {
  return await Article.find().populate('author', 'username email');
};
