import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
import { useRouter } from "next/router";

export default function NewKollektivDialog(props) {
  const router = useRouter();
  const { open, setOpen } = props;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [place, setPlace] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (isNaN(zipCode)) {
      setBtnDisabled(true);
    } else if (name && address && zipCode && place) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [name, address, zipCode, place]);

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = {
        navn: name,
        adresse: address,
        postnummer: parseInt(zipCode),
        poststed: place,
      };
      await fetch("/api/kollektiv/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await setOpen(false);
      router.reload(window.location.pathname);
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
        <DialogTitle id="form-dialog-title">Nytt kollektiv</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Opprett et nytt kollektiv ved å fylle inn informasjonen under.
          </DialogContentText>

          <TextField
            margin="dense"
            id="name"
            label="Navn *"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Adresse *"
            type="text"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Postnummer *"
            type="text"
            fullWidth
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Poststed *"
            type="text"
            fullWidth
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setOpen(false)}>
            Avbryt
          </Button>
          <Button
            onClick={(e) => submitData(e)}
            color="primary"
            disabled={btnDisabled}
          >
            Opprett
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
