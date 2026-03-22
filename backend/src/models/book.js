import { model, Schema } from "mongoose";

const BookSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    file: {type: String, required: true}
})

const Book = model('Book', BookSchema)
export default Book