const express = require("express");
const router = express.Router();
const { getNotes, addNote, deleteNote, updateNote } = require("../controllers/notes");

router
    .route("/")
    .get(getNotes)
    .post(addNote);

router
    .route("/:id")
    .delete(deleteNote)
    .patch(updateNote);

module.exports = router;