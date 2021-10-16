import LoginButton from "../components/LoginButton";
import { useSession } from "next-auth/client";
import {
  Button,
  CircularProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableSortLabel,
  TableBody,
  Select,
  MenuItem,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useEffect, useState } from "react";
import CreateVaskelisteDialog from "../components/CreateVaskelisteDialog";
import UserJobCard from "../components/UserJobCard";
import { useVaskeliste } from "../components/util/hooks";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";

export default function Vaskeliste() {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserJob, setSelectedUserJob] = useState(null);
  const [userChoices, setUserChoices] = useState(null);
  const { vaskeliste } = useVaskeliste();
  const weekNow = moment(new Date(Date.now())).isoWeek();
  const yearNow = moment(new Date(Date.now())).year();
  console.log(vaskeliste);
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedUser(e.target.value);
  };
  useEffect(() => {
    if (selectedUser) {
      setSelectedUserJob(
        vaskeliste[0].rader[0].userJobs.filter(
          (userJob) => userJob.user.id == selectedUser
        )[0]
      );
      console.log(selectedUserJob);
    }
  }, [selectedUser]);
  useEffect(() => {
    if (
      vaskeliste &&
      vaskeliste[0]?.rader[0] &&
      vaskeliste[0]?.rader[0].userJobs?.length > 0
    ) {
      const userJobs = vaskeliste[0].rader[0].userJobs;
      setUserChoices(
        userJobs.map((userJob) => {
          return { id: userJob.user.id, name: userJob.user.name };
        })
      );
    }
  }, [vaskeliste]);

  return (
    <>
      <div className="flexCenter">
        <Typography variant="h6" gutterBottom>
          Vaskeliste
        </Typography>
        {vaskeliste?.length > 0 || (
          <>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Det ser ut til at kollektivet ditt ikke har noen vaskeliste!
            </Typography>

            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => setOpen(true)}
            >
              Lag vaskeliste
            </Button>
          </>
        )}
        {!vaskeliste || vaskeliste?.length === 0 || (
          <>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Her finner du vaskelisten for de neste ukene.
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Vi er i uke {weekNow} ({yearNow})
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedUser ? selectedUser : -1}
              label="Velg bruker"
              onChange={handleChange}
            >
              <MenuItem value={-1}>Alle</MenuItem>
              {userChoices?.map((choice, i) => (
                <MenuItem value={choice.id} key={i}>
                  {choice.name}
                </MenuItem>
              ))}
            </Select>
            {selectedUserJob && (
              <>
                <br></br>
                <div style={{ width: "90%" }}>
                  <UserJobCard
                    userJob={selectedUserJob}
                    weekNow={weekNow}
                    yearNow={yearNow}
                  />
                </div>
              </>
            )}
            {!selectedUserJob &&
              vaskeliste &&
              vaskeliste[0].rader[0].userJobs.map((userJob, i) => (
                <div key={i} style={{ width: "90%" }}>
                  <br />
                  <UserJobCard
                    userJob={userJob}
                    weekNow={weekNow}
                    yearNow={yearNow}
                  />
                </div>
              ))}

            {true || (
              <Button
                variant="contained"
                color="default"
                startIcon={<DeleteIcon />}
                onClick={() => setOpen(true)}
                style={{ marginTop: "16px" }}
              >
                Slett vaskeliste
              </Button>
            )}
          </>
        )}
      </div>
      <CreateVaskelisteDialog
        open={open}
        setOpen={setOpen}
      ></CreateVaskelisteDialog>
    </>
  );
}
