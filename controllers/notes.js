const Note = require("../models/Note");

exports.getNotes = async (req, res, next) => {
    try {
        const notes = await Note.find();

        return res.status(200).json({
            success: true,
            count: notes.length,
            data: notes
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

exports.addNote = async (req, res, next) => {
    try {
        const note = await Note.create(req.body);

        return res.status(201).json({
            success: true,
            data: note
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });        
    }
}

exports.deleteNote = async (req, res, next) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({
                success: false,
                error: "No note found"
            });
        }

        await note.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });        
    }
}

exports.updateNote = async (req, res, next) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
            useFindAndModify: false
        });

        return res.status(201).json({
            success: true,
            data: note
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });       
    }
}