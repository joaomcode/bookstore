import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    publisher: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    authors: [{
        type: String,
        required: true
    }],
})

const bookModel = mongoose.model('Book', bookSchema)

export default bookModel;

