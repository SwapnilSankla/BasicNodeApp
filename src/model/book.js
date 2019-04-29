import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BookSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
        summary: {type: String, required: true},
        isbn: {type: String, required: true}
    }
)

// Virtual for getBook's URL
BookSchema
    .virtual('url')
    .get(function () {
        return '/catalog/getBook/' + this._id
    })

//Export model
module.exports = mongoose.model('Book', BookSchema)