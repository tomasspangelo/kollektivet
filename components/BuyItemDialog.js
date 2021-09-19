import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function BuyItemDialog(props) {
  const { open, setOpen, handleClose, selectedItem, setSelectedItem } = props;
  const [price, setPrice] = useState(null);
  useEffect(() => {
    setPrice(selectedItem?.pricePayed);
  }, [selectedItem]);
  const submitData = async (e) => {
    e.preventDefault();
    const newItem = JSON.parse(JSON.stringify(selectedItem));
    newItem.pricePayed = parseInt(price);
    try {
      const body = {
        item: newItem,
      };
      await fetch("/api/items/finish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteData = async (e) => {
    e.preventDefault();
    try {
      const body = {
        id: selectedItem.id,
      };
      await fetch("/api/items/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };
  const submitDataUnfinish = async (e) => {
    e.preventDefault();
    try {
      const body = {
        item: selectedItem,
      };
      await fetch("/api/items/unfinish", {
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
        <DialogTitle sx={{ m: 0, p: 2 }} id="form-dialog-title">
          {selectedItem?.title}
          {handleClose ? (
            <IconButton
              aria-label="close"
              onClick={(e) => deleteData(e)}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <DeleteIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Oppgi hvor mye du betalte for varen. Dette kan endres senere.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Pris"
            type="number"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />
          {!selectedItem?.bought || (
            <Button
              onClick={(e) => submitDataUnfinish(e)}
              color="secondary"
              variant="outlined"
              startIcon={<CloseIcon></CloseIcon>}
              disabled={!selectedItem?.bought}
            >
              Fjern som fullført
            </Button>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Avbryt
          </Button>

          <Button onClick={(e) => submitData(e)} color="primary">
            Lagre
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
