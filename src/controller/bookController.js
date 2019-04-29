import Book from '../model/book'

exports.getBooks = (_, res) => {
    Book.find({}, 'title author')
        .populate('author')
        .exec((err, list_books) => {
            if (err) {
                return next(err)
            }
            res.send(list_books)
        })
}

exports.getBook = (req, res) => {
    Book.findById(req.params.id, 'title author')
        .populate('author')
        .exec((err, list_books) => {
            if (err) {
                return next(err)
            }
            res.send(list_books)
        })
}

exports.createBook = (req, res) => {
    const book = new Book(req.body)
    book.save((err) => {
        if (err) {
            console.log("err: " + err)
            return handleError(err)
        }
        res.status(202)
        return res.send("ok")
    })
}

exports.deleteBook = (req, res) => {
    Book.findById(req.params.id).exec().then((item) => {
        if (item === null) {
            res.status(404)
            return res.send("specified getBook does not exists")
        } else {
            Book.deleteOne({_id: req.params.id}, (err) => console.log(err))
            return res.send("ok")
        }
    })
}

exports.updateBook = (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err === null) {
            return res.send("updated")
        } else {
            return res.status(500)
            console.log(err)
        }
    })
}
