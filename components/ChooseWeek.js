import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useState } from "react";
import moment from "moment";

const ChooseWeek = ({ firstWeek, setFirstWeek, numWeeks, setNumWeeks }) => {
  const [thisWeek, setThisWeek] = useState(false);

  const handleChange = () => {
    if (!thisWeek) {
      console.log(new Date(Date.now()));
      let today = moment(new Date(Date.now()));
      setFirstWeek(parseInt(today.isoWeek()));
    }
    setThisWeek(!thisWeek);
  };
  return (
    <>
      <DialogContentText>
        Velg hvilken uke vaskelisten begynner, og antall uker den skal genereres
        for.
      </DialogContentText>

      <FormControlLabel
        control={
          <Checkbox
            checked={thisWeek}
            onChange={() => handleChange()}
            color="primary"
          />
        }
        label="Denne uken"
      ></FormControlLabel>

      <TextField
        type="number"
        label="Ukenummer"
        value={firstWeek == 0 ? "" : firstWeek}
        onChange={(e) => setFirstWeek(parseInt(e.target.value))}
        disabled={thisWeek}
      ></TextField>
      <TextField
        style={{ marginTop: "16px" }}
        type="number"
        label="Antall uker"
        value={numWeeks == 0 ? "" : numWeeks}
        onChange={(e) => setNumWeeks(parseInt(e.target.value))}
      ></TextField>
    </>
  );
};
export default ChooseWeek;
