import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function FinishDialog(props) {
  const router = useRouter();
  const { open, setOpen, job } = props;
  const [session, loading] = useSession();
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = {
        id: job,
      };
      await fetch("/api/vaskeliste/finish", {
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
        <DialogTitle id="form-dialog-title">Fullfør oppgave</DialogTitle>
        <DialogContent>
          <DialogContentText>Ønsker du å fullføre oppgaven?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setOpen(false)}>
            Avbryt
          </Button>

          <Button onClick={(e) => submitData(e)} color="primary">
            Ja
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
