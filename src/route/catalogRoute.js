var express = require('express')
var router = express.Router()

// Require controller modules.
var book_controller = require('../controller/bookController')
var author_controller = require('../controller/authorController')

router.get('/books', book_controller.getBooks)
router.get('/books/:id', book_controller.getBook)
router.post('/books', book_controller.createBook)
router.put('/books/:id', book_controller.updateBook)
router.delete('/books/:id', book_controller.deleteBook)

router.get('/authors', author_controller.getAuthors)
router.get('/authors/:id', author_controller.getAuthor)
router.post('/authors', author_controller.createAuthor)
router.put('/authors/:id', author_controller.updateAuthor)
// router.delete('/author/:id', author_controller.deleteAuthor)

module.exports = router