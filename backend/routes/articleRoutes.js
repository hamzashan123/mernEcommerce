// routes/articleRoutes.js
const express = require('express');
const { createArticle, getAllArticles } = require('../controllers/articleController');
const { verifyToken, adminRole } = require('../middleware/authMiddleware');
// const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', createArticle);
router.get('/' , verifyToken, getAllArticles);

module.exports = router;
