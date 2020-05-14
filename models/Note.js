const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: false
    },
    content: {
        type: String,
        trim: true,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Note", NoteSchema);