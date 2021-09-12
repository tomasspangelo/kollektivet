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

export default function AddUserDialog(props) {
  const { open, setOpen, handleClose, item } = props;
  const [email, setEmail] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [selectedPerson, setSelectedPerson] = React.useState(null);
  const { result } = useUser(email);
  const submitData = async (e) => {
    e.preventDefault();

    try {
      const body = {
        kollektivId: kollektiv?.id,
        id: selectedPerson.id,
      };
      await fetch("/api/members/add", {
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
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Legg til bruker i kollektivet
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Søk på bruker etter Email. Det er ikke mulig å legge til en bruker
            som allerede er medlem av et annet kollektiv.
          </DialogContentText>
          <div className="photoBox">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="email"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <IconButton>
              <SearchIcon></SearchIcon>
            </IconButton>
          </div>
          <MemberListSelectable
            medlemmer={result}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            selectedPerson={selectedPerson}
            setSelectedPerson={setSelectedPerson}
          ></MemberListSelectable>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Avbryt
          </Button>
          <Button
            onClick={(e) => {
              submitData(e);
              let newKollektiv = JSON.parse(JSON.stringify(kollektiv));
              newKollektiv.medlemmer.push(selectedPerson);
              setKollektiv(newKollektiv);
            }}
            color="primary"
            disabled={!selectedIndex && selectedIndex != 0}
          >
            Legg til bruker
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
