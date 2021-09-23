import {
  Button,
  DialogContentText,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const CreateJobs = ({ jobs, setJobs }) => {
  console.log(jobs);
  const handleClick = () => {
    let newJobs = JSON.parse(JSON.stringify(jobs));
    newJobs.push({ name: "", description: "" });
    setJobs(newJobs);
  };
  const handleValueChange = (e, i) => {
    let newJobs = JSON.parse(JSON.stringify(jobs));
    newJobs[i].name = e.target.value;
    setJobs(newJobs);
  };
  const handleDelete = (i) => {
    let newJobs = JSON.parse(JSON.stringify(jobs));
    newJobs.pop(i);
    setJobs(newJobs);
  };

  return (
    <>
      <DialogContentText>
        Du må definere hvilke type jobber vaskelisten skal inneholde.
      </DialogContentText>
      <List>
        {jobs?.map((job, i) => (
          <div key={i}>
            <ListItem>
              <TextField
                label={`Navn`}
                variant="outlined"
                value={job.name}
                onChange={(e) => handleValueChange(e, i)}
              />
              <IconButton onClick={() => handleDelete(i)}>
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </ListItem>
            {i == jobs?.length - 1 || <Divider component="li"></Divider>}
          </div>
        ))}
      </List>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClick}
      >
        Legg til jobb
      </Button>
    </>
  );
};

export default CreateJobs;
