import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";

function DeleteModal(props) {
    const [open, setOpen] = useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleCancel() {
        setOpen(false);
    }

    function handleDelete() {
        props.onDelete();
    }

    return (
        <div>
            <button variant="outlined" color="primary" onClick={handleClickOpen}>
                <DeleteIcon />
            </button>

            <Dialog
                open={open}
                onClose={handleCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete Note"}</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this note?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCancel} size="small" variant="outlined" color="default">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} size="small" variant="contained" color="secondary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DeleteModal;