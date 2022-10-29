import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    published: String,
    description: String,
    price: String
}, {
    timestamps: true,
    collection: 'books'
});

export default mongoose.model('Books', BookSchema);