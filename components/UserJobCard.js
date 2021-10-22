import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  ExpandMore,
  Button,
} from "@material-ui/core";
import {
  MoreVert,
  FavoriteIcon,
  ShareIcon,
  ExpandMoreIcon,
  Check,
} from "@material-ui/icons";
import { useState } from "react";
import FinishDialog from "./FinishDialog";

const UserJobCard = ({ userJob, yearNow, weekNow }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar src={userJob.user.image}>R</Avatar>}
          action={
            <IconButton aria-label="settings" disabled={true}>
              <MoreVert />
            </IconButton>
          }
          title={userJob.user.name}
          subheader={`Uke ${weekNow}, ${yearNow}`}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom component="div">
            {userJob.job.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Oppgaven er{" "}
            {userJob.finished == true ? "fullført." : "ikke fullført."}
          </Typography>
        </CardContent>
        {userJob.finished ? (
          <></>
        ) : (
          <CardActions>
            <Button startIcon={<Check />} onClick={() => setOpen(!open)}>
              Fullfør
            </Button>
          </CardActions>
        )}
      </Card>
      <FinishDialog open={open} setOpen={setOpen} job={userJob.id} />
    </>
  );
};
export default UserJobCard;
