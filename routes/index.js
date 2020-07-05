const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');

router.get('/', async (req, res) => {
    let books, authors;
    try {
        books = await Book.find().sort({ createdAt: 'desc' }).limit(10).exec();
        authors = await Author.find().sort({ name: 'desc' }).limit(10).exec();
    } catch {
        books = []
        authors = []
    }
    res.render('index', { books: books, authors: authors });
})

module.exports = router;