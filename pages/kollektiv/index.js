import MemberList from "../../components/MemberList";
import AddUserDialog from "../../components/AddUserDialog";
import { useMembers } from "../../components/util/hooks";
import { kollektivAtom } from "../../lib/atom";
import { useAtom } from "jotai";
import { Button, Typography } from "@material-ui/core";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AddIcon from "@material-ui/icons/Add";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSession } from "next-auth/client";
import NewKollektivDialog from "../../components/newKollektivDialog";

export default function Kollektiv() {
  const [session, loading] = useSession();
  const [kollektiv, setKollektiv] = useAtom(kollektivAtom);
  const { result } = useMembers();
  const router = useRouter();
  const isLoading = result ? false : true;
  useEffect(() => {
    if (kollektiv != result) {
      setKollektiv(result);
    }
  }, [result, kollektiv, setKollektiv]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let content = (
    <>
      <div className="flexCenter">
        <Typography variant="h6" gutterBottom>
          {isLoading ? "Mitt kollektiv" : kollektiv?.navn}
        </Typography>
        {isLoading || (
          <>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {isLoading ? "Henrik Ibsens gate 1" : kollektiv?.adresse}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {isLoading
                ? "0255, Oslo"
                : kollektiv?.postnummer + ", " + kollektiv?.poststed}
            </Typography>
          </>
        )}
      </div>
      <div className="overfloxBox">
        {isLoading ? (
          <div className="flexCenter">
            <CircularProgress style={{ margin: "16px" }} />
          </div>
        ) : (
          <MemberList kollektiv={kollektiv} />
        )}
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
  if (session?.user.kollektivId === null) {
    content = (
      <div className="flexCenter stretch">
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Oops... Du er ikke med i noe kollektiv!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          style={{ margin: "16px" }}
          onClick={() => setOpen(true)}
        >
          Opprett et nytt kollektiv
        </Button>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          gutterBottom
          style={{ textAlign: "center" }}
        >
          ...eller få noen du kjenner til å legge deg til i deres kollektiv.
        </Typography>
        <NewKollektivDialog open={open} setOpen={setOpen}></NewKollektivDialog>
      </div>
    );
  }
  return content;
}
