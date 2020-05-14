// API URL
const API = "http://localhost:5000/api/v1/notes/"

// Add a note to the database
async function addNote(note = {}) {
    await fetch(API, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(note)
    });
}

// Delete a note from the database
async function deleteNote(id) {
    await fetch(API + id, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });
}

// Update a note in the database
async function updateNote(id, note = {}) {
    await fetch(API + id, {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(note)
    });
}

export { API, addNote, deleteNote, updateNote };