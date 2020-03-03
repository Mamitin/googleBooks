const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title: {type: String, required:true},
    authors: {type: Array, required:true},
    description: String,
    image: {type: String, default:true},
    link:{type: String, default:true}
});

const Book = mongoose.model("Books", bookSchema);

module.exports = Book;