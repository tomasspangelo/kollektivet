import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function DeleteDialog(props) {
  const router = useRouter();
  const { open, setOpen, selected } = props;
  const [session, loading] = useSession();
  console.log(selected);
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = {
        member: selected,
      };
      await fetch("/api/members/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await setOpen(false);
      if (session?.user?.id === selected?.id) {
        router.reload(window.location.pathname);
      }
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
        <DialogTitle id="form-dialog-title">Fjern bruker</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Er du sikker på at du ønsker å fjerne {selected?.name} fra
            kollektivet?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setOpen(false)}>
            Avbryt
          </Button>
          <Button onClick={(e) => submitData(e)} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
