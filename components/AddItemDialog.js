import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useUser } from "./util/hooks";
import MemberListSelectable from "./MemberListSelectable";

export default function AddItemDialog(props) {
  const { open, setOpen } = props;
  const [name, setName] = React.useState("");
  const [comment, setComment] = React.useState("");
  //const { result } = useUser(email);
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: name,
        content: comment,
      };
      await fetch("/api/items/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Legg til</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Legg til en ny gjenstand i kollektivets handleliste
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Navn"
            type="text"
            fullWidth
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Kommentar"
            type="text"
            fullWidth
            multiline={true}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Avbryt
          </Button>
          <Button
            onClick={(e) => {
              submitData(e);
            }}
            color="primary"
            disabled={!name}
          >
            Legg til gjenstand
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
