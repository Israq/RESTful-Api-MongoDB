const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descripton: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})