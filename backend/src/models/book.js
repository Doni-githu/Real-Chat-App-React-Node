import { model, Schema } from "mongoose";

const BookSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    book: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    cover: {type: String, required: true},
})

const Book = model('Book', BookSchema)
export default Book