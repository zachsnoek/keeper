import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import formatDate from "../utils/formatDate";
import { API, addNote, deleteNote, updateNote } from "../utils/api";

function App() {
    const [notes, setNotes] = useState([]);

    getNotes();

    // Get notes from API and update notes state
    async function getNotes() {
        await fetch(API)
            .then(data => data.json())
            .then(notes => {
                setNotes(notes.data);
            });
    }

	return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} getNotes={getNotes}/>
            {notes.map((note, index) => {
                return (
                    <Note
                        key={note._id}
                        id={note._id}
                        title={note.title}
                        content={note.content}
                        date={formatDate(note.createdAt)}
                        getNotes={getNotes}
                        onSave={updateNote}
                        onDelete={deleteNote}
                    />
                )
            })}
            <Footer />
        </div>
  );
}

export default App;
