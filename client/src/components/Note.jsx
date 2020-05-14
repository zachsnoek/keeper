import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

function Note(props) {
    const [editing, setEditing] = useState(false);
	const [note, setNote] = useState({ title: props.title, content: props.content });

	function handleChange(event) {
		const { name, value } = event.target;

		setNote(prevNote => {
			return {
				...prevNote,
				[name]: value
			}
		});
    }

    function handleEdit() {
        setEditing(true);
    }

    function handleSave() {
        setEditing(false);
        props.onSave(props.id, note);
        props.getNotes();
    }

    function handleDelete() {
        props.onDelete(props.id);
        props.getNotes();
    }

    return(
        <div className="note">
            {editing ? 
                <input
                    className="edit-title"
                    onChange={handleChange}
                    name="title"
                    value={note.title}
                    placeholder={props.title}
                    autoFocus
                />
                :
                <h1>{props.title}</h1>
            }

            <h2>{props.date}</h2>

            {editing ?
                <textarea
                    className="edit-content"
                    onChange={handleChange}
                    name="content"
                    value={note.content}
                    placeholder={props.content}
                >
                </textarea>
                :
                <p>{props.content}</p>
            }

            <DeleteModal onDelete={handleDelete}/>

            {editing ? 
                (<button onClick={handleSave}><SaveIcon /></button>) : 
                (<button onClick={handleEdit}><EditIcon /></button>)
            }
        </div>
    );
}

export default Note;