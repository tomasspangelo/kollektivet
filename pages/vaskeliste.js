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
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import CreateVaskelisteDialog from "../components/CreateVaskelisteDialog";
import { useVaskeliste } from "../components/util/hooks";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";

export default function Vaskeliste() {
  const [open, setOpen] = useState(false);
  const { vaskeliste } = useVaskeliste();
  const weekNow = moment(new Date(Date.now())).isoWeek();
  const yearNow = moment(new Date(Date.now())).year();
  console.log(vaskeliste);

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
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Uke</TableCell>
                  {vaskeliste ? (
                    vaskeliste[0]?.rader[0]?.userJobs?.map((userJob, i) => (
                      <TableCell key={i}>{userJob.job?.name}</TableCell>
                    ))
                  ) : (
                    <></>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {vaskeliste ? (
                  vaskeliste[0]?.rader?.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row.week}</TableCell>
                      {row?.userJobs?.map((userJob, j) => (
                        <TableCell key={j}>
                          {userJob.user?.name || "Ingen"}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <></>
                )}
              </TableBody>
            </Table>
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
