import {
  Button,
  DialogContentText,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { useState, useEffect } from "react";

const CreateVaskeliste = ({ jobs, selected, setSelected, kollektiv }) => {
  const handleChange = (e, i) => {
    let newSelected = JSON.parse(JSON.stringify(selected));
    newSelected[i] = e.target.value;
    console.log(e);
    console.log(newSelected);
    setSelected(newSelected);
  };
  useEffect(() => {
    let newSelected = JSON.parse(JSON.stringify(selected));
    for (let i = 0; i < jobs?.length; i++) {
      newSelected[i] = -1;
    }
    console.log(newSelected);
    setSelected(newSelected);
  }, [jobs]);
  return (
    <>
      <DialogContentText>
        Alloker personer til de ulike jobbene. Dette vil være tildeling første
        uke.
      </DialogContentText>
      <Table>
        <TableBody>
          {jobs?.map((job, i) => (
            <TableRow key={i}>
              <TableCell>
                <b>{job?.name}</b>
              </TableCell>
              <TableCell>
                <IconButton>
                  <Select
                    value={selected[i] ? selected[i] : ""}
                    label="Utføres av"
                    onChange={(e) => handleChange(e, i)}
                  >
                    <MenuItem value={-1}>Ingen</MenuItem>
                    {kollektiv?.medlemmer?.map((medlem, j) => (
                      <MenuItem value={medlem.id} key={j}>
                        {medlem.name.slice(0, 10) + "..."}
                      </MenuItem>
                    ))}
                  </Select>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CreateVaskeliste;
