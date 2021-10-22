import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import CreateJobs from "./CreateJobs";
import ChooseWeek from "./ChooseWeek";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CreateVaskeliste from "./CreateVaskeliste";
import { CircularProgress } from "@material-ui/core";
import { useMembers } from "./util/hooks";
import moment from "moment";

export default function CreateVaskelisteDialog(props) {
  const router = useRouter();
  const { open, setOpen } = props;
  const [jobs, setJobs] = useState([]);
  const [selected, setSelected] = useState([]);
  const [index, setIndex] = useState(0);
  const [firstWeek, setFirstWeek] = useState(0);
  const [numWeeks, setNumWeeks] = useState(0);
  const { result: kollektiv } = useMembers();

  const [session, loading] = useSession();
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = {
        selected: selected,
        jobs: jobs,
        firstWeek: firstWeek,
        numWeeks: numWeeks,
        kollektivId: kollektiv.id,
        year: moment(new Date(Date.now())).year(),
      };
      await fetch("/api/vaskeliste/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const content = [
    <CreateJobs jobs={jobs} setJobs={setJobs} key={0} />,
    <CreateVaskeliste
      jobs={jobs}
      selected={selected}
      setSelected={setSelected}
      kollektiv={kollektiv}
      key={1}
    />,
    <ChooseWeek
      key={2}
      firstWeek={firstWeek}
      setFirstWeek={setFirstWeek}
      numWeeks={numWeeks}
      setNumWeeks={setNumWeeks}
    ></ChooseWeek>,
    <div key={3}>
      <DialogContentText>Generer vaskeliste...</DialogContentText>
      <div className="flexCenter2">
        <CircularProgress></CircularProgress>
      </div>
    </div>,
  ];
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ny vaskeliste</DialogTitle>
        <DialogContent>{content[index]}</DialogContent>
        <DialogActions>
          <div className="flexCenterHorizontal flexSpace">
            {index === 3 || (
              <Button
                color="primary"
                onClick={() => setIndex(index - 1)}
                startIcon={<ChevronLeftIcon></ChevronLeftIcon>}
                disabled={index === 0}
              >
                Forrige
              </Button>
            )}
            {index >= content.length - 2 || (
              <Button
                color="primary"
                endIcon={<ChevronRightIcon />}
                onClick={() => setIndex(index + 1)}
                disabled={
                  index === content.length - 1 ||
                  jobs.length === 0 ||
                  (index === 2 && (!firstWeek || !numWeeks)) ||
                  jobs.filter((job) => !job.name).length > 0
                }
              >
                Neste
              </Button>
            )}
            {index == content.length - 2 && (
              <Button
                color="primary"
                endIcon={<ChevronRightIcon />}
                onClick={(e) => {
                  setIndex(index + 1);
                  submitData(e);
                }}
                disabled={!numWeeks || !firstWeek}
              >
                Fullfør
              </Button>
            )}
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
