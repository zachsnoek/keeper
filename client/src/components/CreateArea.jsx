import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
	const [isExpanded, setExpanded] = useState(false);
	const [note, setNote] = useState({title: "", content: ""});
	
	function handleChange(event) {
		const { name, value } = event.target;

		setNote(prevNote => {
			return {
				...prevNote,
				[name]: value
			}
		});
	}

    function handleAdd(event) {
        props.onAdd(note);
        props.getNotes();
        setNote({title: "", content: ""});
        event.preventDefault();
    }

    function expand() {
		setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded ? 
                    <input
                        value={note.title}
                        onChange={handleChange}
                        name="title"
                        placeholder="Title"
                        autoComplete="off"
                        autoCorrect="off" 
                    />
                : null}

                <textarea
                    onClick={expand}
                    value={note.content}
                    onChange={handleChange}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? "3" : "1"}
                    autoCorrect="off"
                />

                <Zoom in={isExpanded}>
                    <Fab onClick={handleAdd}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
