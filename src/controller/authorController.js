import Author from '../model/author'

exports.getAuthors = (_, res) => {
    Author.find({}, 'first_name family_name')
        .exec((err, authors) => {
            if (err) {
                res.status(500)
                return res.send('Failed')
            }
            return res.send(authors)
        })
}

exports.getAuthor = (req, res) => {
    Author.findById(req.params.id, 'first_name family_name')
        .exec((err, author) => {
            if (err) {
                res.status(500)
                return res.send("error!")
            }
            if (!author) {
                res.status(404)
                return res.send("Author does not exists")
            }
            return res.send(author)
        })
}

exports.createAuthor = (req, res) => {
    const author = new Author(req.body)
    author.save((err) => {
        if (err) {
            if (err.name === 'ValidationError') {
                res.status(400)
                return res.send(err.errors)
            }
            console.log(err)
            res.status(500)
            return res.send("error !")
        }
        res.status(202)
        return res.send("accepted")
    })
}

exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) {
            res.status(500)
            return res.send("error")
        }
        res.status(202)
        return res.send("updated")
    })
}
