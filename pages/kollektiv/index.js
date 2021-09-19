import MemberList from "../../components/MemberList";
import AddUserDialog from "../../components/AddUserDialog";
import { useMembers } from "../../components/util/hooks";
import { kollektivAtom } from "../../lib/atom";
import { useAtom } from "jotai";
import { Button, Typography } from "@material-ui/core";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { useRouter } from "next/router";
import React from "react";

export default function Kollektiv() {
  const [kollektiv, setKollektiv] = useAtom(kollektivAtom);
  const { result } = useMembers();
  const router = useRouter();
  if (kollektiv != result) {
    setKollektiv(result);
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flexCenter">
        <Typography variant="h6" gutterBottom>
          {kollektiv?.navn}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {kollektiv?.adresse}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {kollektiv?.postnummer + ", " + kollektiv?.poststed}
        </Typography>
      </div>
      <div className="overfloxBox">
        <MemberList kollektiv={kollektiv} />
      </div>
      <div className="flexCenter">
        <Button
          variant="outlined"
          startIcon={<GroupAddIcon />}
          onClick={handleClickOpen}
        >
          Legg til bruker
        </Button>
      </div>
      <AddUserDialog
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        kollektiv={kollektiv}
        setKollektiv={setKollektiv}
      ></AddUserDialog>
    </>
  );
}
