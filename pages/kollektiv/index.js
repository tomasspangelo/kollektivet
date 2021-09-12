import MemberList from "../../components/MemberList";
import AddUserDialog from "../../components/AddUserDialog";
import { useMembers } from "../../components/util/hooks";
import { kollektivAtom } from "../../lib/atom";
import { useAtom } from "jotai";
import { Button } from "@material-ui/core";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { useRouter } from "next/router";
import React from "react";

export default function Kollektiv() {
  const [kollektiv, setKollektiv] = useAtom(kollektivAtom);
  const { result } = useMembers();
  const router = useRouter();
  if (!kollektiv) {
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
      <MemberList kollektiv={kollektiv} />
      <Button
        variant="outlined"
        startIcon={<GroupAddIcon />}
        onClick={handleClickOpen}
      >
        Legg til bruker
      </Button>
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
